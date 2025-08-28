import {GameCell, GameFiledBlock} from './game-filed-block.type';
import {Player} from './player.enum';

export interface Score {
  player: number;
  computer: number;
}

export interface GameState {
  field: GameFiledBlock;
  score: Score;
  currentCell?: GameCell;
  isRunning: boolean;
  winner?: 'player' | 'computer';
  reactionMs: number;
}
