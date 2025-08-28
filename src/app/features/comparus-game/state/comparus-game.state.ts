import {ComponentStore} from '@ngrx/component-store';
import {Injectable} from '@angular/core';
import {GameState, Score} from '../models/game-state.interface';
import {GameCell, GameFiledBlock, GameFiledBlockColor} from '../models/game-filed-block.type';
import {PlayerType} from '../models/player.type';
import {Player} from '../models/player.enum';
import {tap} from 'rxjs';

@Injectable()
export class ComparusGameState extends ComponentStore<GameState> {

  constructor() {
    super({
      field: Array.from({length: 10}, (_, row) =>
        Array.from({length: 10}, (_, col) => ({
          row,
          col,
          color: 'idle' as GameFiledBlockColor
        }))
      ).flat(),
      score: {player: 0, computer: 0},
      isRunning: false,
      reactionMs: 1000
    });
  }

  //Effects
  public readonly start = this.effect<void>(trigger$ =>
    trigger$.pipe(
      tap(() => {
        this.patchState({
          score: {player: 0, computer: 0},
          winner: undefined,
          isRunning: true
        });

        this.nextRound();
      })
    )
  )

  public readonly nextRound = this.effect<void>(trigger$ =>
    trigger$.pipe(
      tap(() => {
        const row = Math.floor(Math.random() * 10);
        const col = Math.floor(Math.random() * 10);

        const newCell: GameCell = { row, col, color: 'active' };

        this.patchState(state => ({
          ...state,
          field: state.field.map(c =>
            c.row === row && c.col === col ? newCell : { ...c, color: c.color === 'active' ? 'idle' : c.color }
          ),
          currentCell: newCell
        }));

        setTimeout(() => this.timeout(), this.get().reactionMs);
      }))
  );


  public readonly clickCell = this.effect<{ row: number; col: number }>((trigger$) =>
    trigger$.pipe(
      tap(({row, col}) => {
        const s = this.get();
        if (!s.currentCell || !s.isRunning) return;

        if (s.currentCell.row === row && s.currentCell.col === col) {
          this.updateCell(row, col, 'hit');
          this.updateScore('player');
        }
      })
    ))

  //Method
  private timeout() {
    const s = this.get();
    const cell = s.currentCell;
    if (!cell || !s.isRunning) return;

    this.updateCell(cell.row, cell.col, 'miss');
    this.updateScore('computer');
  }

  private updateCell(row: number, col: number, color: 'hit' | 'miss') {
    this.patchState(s => ({
      ...s,
      field: s.field.map(c =>
        c.row === row && c.col === col ? { ...c, color } : c
      )
    }));
  }

  private updateScore(player: 'player' | 'computer') {
    const newScore = {
      ...this.get().score,
      [player]: this.get().score[player] + 1
    };

    let winner: 'player' | 'computer' | undefined;
    if (newScore.player === 10) winner = 'player';
    if (newScore.computer === 10) winner = 'computer';
    this.patchState({
        ...this.state,
        score: newScore,
        winner,
        isRunning: !winner
      }
    );

    if (!this.get().winner) {
      this.nextRound();
    }
  }

  //Updaters
  public readonly setReactionMs = this.updater<number>((state, ms) => ({
    ...state,
    reactionMs: ms
  }))

  public readonly setWinner = this.updater<Player | undefined>((state, winner) => ({
    ...state,
    isRunning: false,
    winner: winner
  }))

  //Selectors
  public readonly field$ = this.select((state: GameState): GameFiledBlock => state.field);
  public readonly score$ = this.select((state: GameState): Score => state.score);
  public readonly isRunning$ = this.select((state: GameState): boolean => state.isRunning);
  public readonly winner$ = this.select((state: GameState) => state.winner);
  public readonly reactionMs$ = this.select((state: GameState): number => state.reactionMs);
}
