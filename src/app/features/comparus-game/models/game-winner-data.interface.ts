import {PlayerType} from './player.type';

export interface GameWinner {
  winner: PlayerType;
  score: { player: number; computer: number };
}
