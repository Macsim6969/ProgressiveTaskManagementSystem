import {Component, DestroyRef, EventEmitter, inject, Input, Output, signal} from '@angular/core';
import {AsyncPipe, NgIf} from "@angular/common";
import {GamePhase, GameState} from '../../models/game.model';
import {GameService} from '../../services/game.service';
import {takeUntilDestroyed} from '@angular/core/rxjs-interop';
import {Observable} from 'rxjs';
import {ComparusGameState} from '../../state/comparus-game.state';
import {FormsModule} from '@angular/forms';
import {Score} from '../../models/game-state.interface';

@Component({
  selector: 'app-comparus-game-header',
  imports: [
    AsyncPipe,
    FormsModule
  ],
  templateUrl: './comparus-game-header.html',
  styleUrl: './comparus-game-header.scss'
})
export class ComparusGameHeader {
  @Input({required: true}) reactionMs$!: Observable<number>
  @Input({required: true}) score$!: Observable<Score>

  @Output() setReactionsMs = new EventEmitter<number>();
  @Output() setGameState: EventEmitter<void> = new EventEmitter<void>();


  public startGame(): void {
    this.setGameState.emit()
  }

  public onReactionsChange(ms: number): void {
    this.setReactionsMs.emit(ms);
  }
}
