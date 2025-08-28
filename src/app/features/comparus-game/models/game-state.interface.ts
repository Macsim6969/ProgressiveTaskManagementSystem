import {GameCell, GameFiledBlock} from './game-filed-block.type';
import {PlayerType} from './player.type';

export interface Score {
  player: number;
  computer: number;
}

export interface GameState {
  field: GameFiledBlock;
  score: Score;
  currentCell?: GameCell;
  isRunning: boolean;
  winner?: PlayerType;
  reactionMs: number;
}
