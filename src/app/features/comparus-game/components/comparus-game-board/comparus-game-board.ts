import {Component, EventEmitter, Input, Output} from '@angular/core';
import {AsyncPipe, NgClass} from '@angular/common';
import {Observable} from 'rxjs';
import {GameFiledBlock} from '../../models/game-filed-block.type';

@Component({
  selector: 'app-comparus-game-board',
  imports: [
    NgClass,
    AsyncPipe
  ],
  templateUrl: './comparus-game-board.html',
  styleUrl: './comparus-game-board.scss'
})
export class ComparusGameBoard {
  @Input({required: true}) field$!: Observable<GameFiledBlock>;

  @Output() clickedCell: EventEmitter<{ row: number; col: number }> = new EventEmitter<{ row: number; col: number }>();

  public clickCell(data: { row: number; col: number }): void {
    this.clickedCell.emit(data)
  }
}
