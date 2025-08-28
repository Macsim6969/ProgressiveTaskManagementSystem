import {TestBed, fakeAsync, tick} from '@angular/core/testing';
import {ComparusGameState} from './comparus-game.state';
import {MatDialog} from '@angular/material/dialog';
import {of} from 'rxjs';
import {GameCell, GameFiledBlockColor} from '../models/game-filed-block.type';

describe('ComparusGameState', () => {
  let store: ComparusGameState;
  let dialogSpy: jasmine.SpyObj<MatDialog>;

  beforeEach(() => {
    dialogSpy = jasmine.createSpyObj('MatDialog', ['open']);
    TestBed.configureTestingModule({
      providers: [
        ComparusGameState,
        {provide: MatDialog, useValue: dialogSpy}
      ]
    });

    store = TestBed.inject(ComparusGameState);
  });

  it('should be created with initial state', (done) => {
    store.field$.subscribe(field => {
      expect(field.length).toBe(100);
      done();
    });
  });

  it('should set reactionMs with setReactionMs', () => {
    store.setReactionMs(500);
    store.reactionMs$.subscribe(ms => expect(ms).toBe(500));
  });

  it('start should reset field and score, set isRunning true', fakeAsync(() => {
    store.start();
    store.score$.subscribe(score => expect(score.player).toBe(0));
    store.isRunning$.subscribe(running => expect(running).toBeTrue());
    store.field$.subscribe(field => expect(field.length).toBe(100));
  }));

  it('clickCell should increment player score on correct hit', fakeAsync(() => {
    store.start();
    tick(); // nextRound runs

    let activeCell: GameCell | undefined;
    store.field$.subscribe(field => {
      activeCell = field.find(c => c.color === 'active');
    }).unsubscribe();

    store.clickCell({ row: activeCell!.row, col: activeCell!.col });

    store.score$.subscribe(score => {
      expect(score.player).toBe(1);
    }).unsubscribe();

    store.field$.subscribe(field => {
      const updatedCell = field.find(c => c.row === activeCell!.row && c.col === activeCell!.col);
      expect(updatedCell!.color).toBe('hit');
    }).unsubscribe();
  }));



  it('clickCell on wrong cell should not increment player score', fakeAsync((done: DoneFn) => {
    store.start();
    tick(); // nextRound runs

    let activeCell: GameCell | undefined;
    store.field$.subscribe(field => {
      activeCell = field.find(c => c.color === 'active');
    }).unsubscribe();

    store.clickCell({ row: activeCell!.row + 1, col: activeCell!.col });

    store.score$.subscribe(score => {
      expect(score.player).toBe(0);
      done();
    }).unsubscribe();
  }));

  it('should open dialog when player reaches 10 points', fakeAsync((done: DoneFn) => {
    dialogSpy.open.and.returnValue({ afterClosed: () => of(true) } as any);


    store.patchState({
      score: { player: 9, computer: 0 },
      isRunning: true,
      currentCell: { row: 0, col: 0, color: 'active' },
      field: Array.from({ length: 100 }, (_, idx) => ({
        row: Math.floor(idx / 10),
        col: idx % 10,
        color: 'idle' as GameFiledBlockColor
      }))
    });

    store.clickCell({ row: 0, col: 0 });

    store.score$.subscribe(score => {
      expect(score.player).toBe(10);
      expect(store.isRunning$).toBeDefined();
      expect(dialogSpy.open).toHaveBeenCalled();
      done();
    }).unsubscribe();
  }));
});
