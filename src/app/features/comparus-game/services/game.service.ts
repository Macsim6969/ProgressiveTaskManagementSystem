import { Injectable, NgZone } from '@angular/core';
import { BehaviorSubject, Subject, Subscription, timer } from 'rxjs';
import {GameEngine} from '../engine/game-engine';
import {GameConfig, GamePhase, GameState} from '../models/game.model';


@Injectable({ providedIn: 'root' })
export class GameService {
  private engine!: GameEngine;
  private tickerSub?: Subscription;


  private readonly state$ = new BehaviorSubject<GameState | null>(null);
  private readonly events$ = new Subject<'round-start' | 'round-end'>();


  constructor(private zone: NgZone) {
    this.reset({ boardSize: 10, reactionMs: 800, winScore: 10 });
  }


  get stateChanges() { return this.state$.asObservable(); }
  get events() { return this.events$.asObservable(); }


  reset(cfg: GameConfig | Partial<GameConfig>) {
    const current = this.state$.value?.board.size ?? 10;
    const defaults: GameConfig = {
      boardSize: typeof current === 'number' ? current : 10,
      reactionMs: 800,
      winScore: 10,
    };
    const finalCfg: GameConfig = { ...defaults, ...(cfg as any) };
    this.engine = new GameEngine(finalCfg);
    this.pushState();
    this.stopTicker();
  }


  start(reactionMs?: number) {
    if (reactionMs && reactionMs > 50) {
// update live without full reset
      this.engine.reset({ reactionMs });
    }
    this.engine.start();
    this.nextRound();
  }


  click(cellId: string) {
    const res = this.engine.tryHit(cellId);
    if (res === 'hit') {
      this.pushState();
      this.events$.next('round-end');
      if (this.engine.state.phase !== GamePhase.Finished) this.nextRound();
      else this.stopTicker();
    }
  }


  private nextRound() {
    this.stopTicker();
    const activated = this.engine.activateNext();
    this.pushState();
    this.events$.next('round-start');
    if (!activated) return;


    const ms = this.engine.state ? (this.engine as any)['cfg'].reactionMs : 800; // encapsulated but accessible here
// Run timer outside Angular to reduce CD churn
    this.zone.runOutsideAngular(() => {
      this.tickerSub = timer(ms).subscribe(() => {
        this.zone.run(() => {
          this.engine.timeoutMiss();
          this.pushState();
          this.events$.next('round-end');
          if (this.engine.state.phase !== GamePhase.Finished) this.nextRound();
        });
      });
    });
  }


  private stopTicker() {
    this.tickerSub?.unsubscribe();
    this.tickerSub = undefined;
  }


  private pushState() {
    this.state$.next(this.engine.state);
  }
}
