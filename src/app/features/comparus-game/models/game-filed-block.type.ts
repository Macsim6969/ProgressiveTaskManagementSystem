export type GameFiledBlockColor = 'idle' | 'active' | 'hit' | 'miss';

export interface GameCell {
  row: number;
  col: number;
  color: GameFiledBlockColor;
}

export type GameFiledBlock = GameCell[];
