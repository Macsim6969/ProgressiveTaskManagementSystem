import {Component} from '@angular/core';

import {GameHeader} from './components/game-header/game-header';
import {GameBoard} from './components/game-board/game-board';
import {ComparusGameState} from './state/comparus-game.state';

@Component({
  selector: 'app-comparus-game',
  imports: [
    GameHeader,
    GameBoard
  ],
  providers: [ComparusGameState],
  templateUrl: './comparus-game.html',
  styleUrl: './comparus-game.scss'
})
export class ComparusGame {
  get field$() {
    return this.store.field$;
  }

  get score$() {
    return this.store.score$;
  }

  get isRunning$() {
    return this.store.isRunning$;
  }

  get reactionMs$() {
    return this.store.reactionMs$;
  }

  constructor(public store: ComparusGameState) {
  }

  public setGameState(): void {
    this.store.start();
  }

  public setReactionsMs(ms: number): void {
    this.store.setReactionMs(ms);
  }


  public setClickedSell(data: { row: number; col: number }): void {
    this.store.clickCell(data)
  }


}
