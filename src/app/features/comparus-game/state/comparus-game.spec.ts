import { TestBed, fakeAsync, tick } from '@angular/core/testing';
import { ComparusGameState } from './comparus-game.state';
import { MatDialog } from '@angular/material/dialog';
import {of, skip, Subscription, take} from 'rxjs';
import { GameCell, GameFiledBlockColor } from '../models/game-filed-block.type';


describe('ComparusGameState', () => {
  let store: ComparusGameState;
  let dialogSpy: jasmine.SpyObj<MatDialog>;

  beforeEach(() => {
    dialogSpy = jasmine.createSpyObj('MatDialog', ['open']);
    dialogSpy.open.and.returnValue({ afterClosed: () => of(true) } as any);

    TestBed.configureTestingModule({
      providers: [
        ComparusGameState,
        { provide: MatDialog, useValue: dialogSpy }
      ]
    });

    store = TestBed.inject(ComparusGameState);
  });

  it('should be created with initial state', fakeAsync(() => {
    store.field$.pipe(take(1)).subscribe(field => {
      expect(field.length).toBe(100);
    });
  }));

  it('should set reactionMs with setReactionMs', fakeAsync(() => {
    store.setReactionMs(500);
    store.reactionMs$.pipe(take(1)).subscribe(ms => expect(ms).toBe(500));
  }));

  it('start should reset field and score, set isRunning true', fakeAsync(() => {
    store.start();
    tick();

    store.score$.pipe(take(1)).subscribe(score => expect(score.player).toBe(0));
    store.isRunning$.pipe(take(1)).subscribe(running => expect(running).toBeTrue());
    store.field$.pipe(take(1)).subscribe(field => expect(field.length).toBe(100));
  }));

  it('clickCell should increment player score on correct hit', fakeAsync(() => {
    store.start();
    tick();

    let activeCell: GameCell | undefined;
    store.field$.pipe(take(1)).subscribe(field => {
      activeCell = field.find(c => c.color === 'active');
    });

    store.clickCell({ row: activeCell!.row, col: activeCell!.col });
    tick();

    store.score$.pipe(take(1)).subscribe(score => {
      expect(score.player).toBe(1);
    });

    store.field$.pipe(take(1)).subscribe(field => {
      const updatedCell = field.find(c => c.row === activeCell!.row && c.col === activeCell!.col);
      expect(updatedCell!.color).toBe('hit');
    });
  }));

  it('clickCell on wrong cell should not increment player score', fakeAsync(() => {
    store.start();
    tick();

    let activeCell: GameCell | undefined;
    store.field$.pipe(take(1)).subscribe(field => {
      activeCell = field.find(c => c.color === 'active');
    });

    store.clickCell({ row: activeCell!.row + 1, col: activeCell!.col });
    tick();

    store.score$.pipe(take(1)).subscribe(score => {
      expect(score.player).toBe(0);
    });
  }));

  it('should open dialog when player reaches 10 points', fakeAsync(() => {
    spyOn(store, 'nextRound').and.callFake(() => Subscription.EMPTY);

    store.patchState({
      score: { player: 9, computer: 0 },
      isRunning: true,
      currentCell: { row: 0, col: 0, color: 'active' },
      field: Array.from({ length: 100 }, (_, idx) => ({
        row: Math.floor(idx / 10),
        col: idx % 10,
        color: idx === 0 ? 'active' : 'idle'
      }))
    });

    store.clickCell({ row: 0, col: 0 });
    tick();


    store.score$.pipe(skip(1), take(1)).subscribe((score) => {
      expect(score.player).toBe(10);
    });

    expect(dialogSpy.open).toHaveBeenCalled();
  }));


});
