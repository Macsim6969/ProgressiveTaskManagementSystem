import {ChangeDetectionStrategy, Component, EventEmitter, Input, Output} from '@angular/core';
import {GameFiledBlock} from '../../models/game-filed-block.type';

@Component({
  selector: 'app-game-board',
  templateUrl: './game-board.html',
  styleUrl: './game-board.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GameBoard {
  @Input({required: true}) field!: GameFiledBlock;
  @Input({required: true}) isRunning!: boolean;

  @Output() clickedCell: EventEmitter<{ row: number; col: number }> = new EventEmitter<{ row: number; col: number }>();

  public clickCell(data: { row: number; col: number }): void {
    this.clickedCell.emit(data)
  }
}
