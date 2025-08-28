import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogClose, MatDialogRef} from '@angular/material/dialog';
import {GameWinner} from '../../models/game-winner-data.interface';


@Component({
  selector: 'app-game-winner-modal',
  imports: [
    MatDialogClose
  ],
  templateUrl: './game-winner-modal.html',
  styleUrl: './game-winner-modal.scss'
})
export class GameWinnerModal {


  constructor(
    @Inject(MAT_DIALOG_DATA) public data: GameWinner,
    private matDialog: MatDialogRef<GameWinnerModal>
  ) {}

  playAgain() {
    this.matDialog.close(true);
  }
}
