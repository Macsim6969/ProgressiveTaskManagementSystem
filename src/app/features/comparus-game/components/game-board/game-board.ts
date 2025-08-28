import {Component, EventEmitter, Input, Output} from '@angular/core';
import {AsyncPipe} from '@angular/common';
import {Observable} from 'rxjs';
import {GameFiledBlock} from '../../models/game-filed-block.type';

@Component({
  selector: 'app-game-board',
  imports: [
    AsyncPipe
  ],
  templateUrl: './game-board.html',
  styleUrl: './game-board.scss'
})
export class GameBoard {
  @Input({required: true}) field$!: Observable<GameFiledBlock>;
  @Input({required: true}) isRunning$!: Observable<boolean>;

  @Output() clickedCell: EventEmitter<{ row: number; col: number }> = new EventEmitter<{ row: number; col: number }>();

  public clickCell(data: { row: number; col: number }): void {
    this.clickedCell.emit(data)
    console.log(data);
  }
}
