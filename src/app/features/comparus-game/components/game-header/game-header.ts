import {Component, EventEmitter, Input, Output} from '@angular/core';
import {AsyncPipe} from "@angular/common";
import {Observable} from 'rxjs';
import {FormsModule} from '@angular/forms';
import {Score} from '../../models/game-state.interface';
import {MatInput} from '@angular/material/input';
import {MatButton} from '@angular/material/button';

@Component({
  selector: 'app-game-header',
  imports: [
    AsyncPipe,
    FormsModule,
    MatInput,
    MatButton
  ],
  templateUrl: './game-header.html',
  styleUrl: './game-header.scss'
})
export class GameHeader {
  @Input({required: true}) reactionMs$!: Observable<number>;
  @Input({required: true}) score$!: Observable<Score>;
  @Input({required: true}) isRunning$!: Observable<boolean>;

  @Output() setReactionsMs: EventEmitter<number> = new EventEmitter<number>();
  @Output() setGameState: EventEmitter<void> = new EventEmitter<void>();

  public startGame(): void {
    this.setGameState.emit()
  }

  public onReactionsChange(ms: number): void {
    if (ms == null || ms < 100) {
      ms = 100;
    }
    this.setReactionsMs.emit(ms);
  }
}
