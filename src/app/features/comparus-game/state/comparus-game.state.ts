import {ComponentStore} from '@ngrx/component-store';
import {Injectable} from '@angular/core';
import {GameState, Score} from '../models/game-state.interface';
import {GameCell, GameFiledBlock, GameFiledBlockColor} from '../models/game-filed-block.type';
import {tap} from 'rxjs';
import {MatDialog} from '@angular/material/dialog';
import {GameWinnerModal} from '../components/game-winner-modal/game-winner-modal';
import {PlayerType} from '../models/player.type';

@Injectable()
export class ComparusGameState extends ComponentStore<GameState> {
  private roundTimeout?: ReturnType<typeof setTimeout>;

  constructor(
    private dialog: MatDialog
  ) {
    super({
      field: ComparusGameState.createEmptyField(),
      score: {player: 0, computer: 0},
      isRunning: false,
      reactionMs: 1000
    });
  }

  //Effects

  // Initial state for the game
  public readonly start = this.effect<void>(trigger$ =>
    trigger$.pipe(
      tap(() => {
        this.patchState({
          field: ComparusGameState.createEmptyField(),
          score: {player: 0, computer: 0},
          winner: undefined,
          isRunning: true
        });

        this.nextRound();
      })
    )
  )

  //Triggers a new round: randomly selects an active cell
  public readonly nextRound = this.effect<void>(trigger$ =>
    trigger$.pipe(
      tap(() => {

        if (this.roundTimeout) {
          clearTimeout(this.roundTimeout);
        }

        const row = Math.floor(Math.random() * 10);
        const col = Math.floor(Math.random() * 10);

        const newCell: GameCell = { row, col, color: 'active' };

        this.patchState(state => ({
          ...state,
          field: state.field.map(c =>
            c.row === row && c.col === col
              ? newCell
              : { ...c, color: c.color === 'active' ? 'idle' : c.color }
          ),
          currentCell: newCell
        }));

        this.roundTimeout = setTimeout(() => this.timeout(), this.get().reactionMs);
      })
    )
  );

  //Handles player click: updates score if click was on the active cel
  public readonly clickCell = this.effect<{ row: number; col: number }>((trigger$) =>
    trigger$.pipe(
      tap(({row, col}) => {
        const s = this.get();
        if (!s.currentCell || !s.isRunning) return;

        if (s.currentCell.row === row && s.currentCell.col === col) {
          if (this.roundTimeout) {
            clearTimeout(this.roundTimeout);
          }
          this.updateCell(row, col, 'hit');
          this.updateScore('player'); // ⬅️ здесь всё решается
        }
      })
    )
  );


  //Helper

  // Creates an empty 10x10 game field
  private static createEmptyField(): GameCell[] {
    return Array.from({ length: 10 }, (_, row) =>
      Array.from({ length: 10 }, (_, col) => ({
        row,
        col,
        color: 'idle' as GameFiledBlockColor
      }))
    ).flat();
  }

  //Called when player fails to click in time
  private timeout() {
    const s = this.get();
    const cell = s.currentCell;
    if (!cell || !s.isRunning) return;

    this.updateCell(cell.row, cell.col, 'miss');
    this.updateScore('computer');
  }

  //Updates a specific cell color
  private updateCell(row: number, col: number, color: 'hit' | 'miss') {
    this.patchState(s => ({
      ...s,
      field: s.field.map(c =>
        c.row === row && c.col === col ? { ...c, color } : c
      )
    }));
  }

  //Updates score, checks for winner, and either opens modal or continues the game
  private updateScore(player: PlayerType) {
    const s = this.get();

    const newScore = { ...s.score, [player]: s.score[player] + 1 };

    let winner: 'player' | 'computer' | undefined;
    if (newScore.player === 10) winner = 'player';
    if (newScore.computer === 10) winner = 'computer';

    this.patchState({
      ...s,
      score: newScore,
      winner,
      isRunning: !winner,
      currentCell: undefined
    });

    if (winner) {
      this.dialog.open(GameWinnerModal, {
        data: { winner, score: newScore },
        disableClose: true
      }).afterClosed().subscribe(result => {
        if (result) {
          this.patchState({
            field: ComparusGameState.createEmptyField(),
            score: {player: 0, computer: 0},
            winner: undefined,
            isRunning: false
          });
        }
      });
      return;
    }

    this.nextRound();
  }

  //Updaters
  public readonly setReactionMs = this.updater<number>((state, ms) => ({
    ...state,
    reactionMs: ms
  }))


  //Selectors
  public field$ = this.select((state: GameState): GameFiledBlock => state.field);
  public score$ = this.select((state: GameState): Score => state.score);
  public isRunning$ = this.select((state: GameState): boolean => state.isRunning);
  public reactionMs$ = this.select((state: GameState): number => state.reactionMs);
}
