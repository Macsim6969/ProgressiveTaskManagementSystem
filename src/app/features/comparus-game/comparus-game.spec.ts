import {ComponentFixture, TestBed, fakeAsync, tick} from '@angular/core/testing';
import {By} from '@angular/platform-browser';

import {ComparusGame} from './comparus-game';
import {ComparusGameState} from './state/comparus-game.state';
import {GameHeader} from './components/game-header/game-header';
import {GameBoard} from './components/game-board/game-board';

describe('ComparusGame', () => {
  let component: ComparusGame;
  let fixture: ComponentFixture<ComparusGame>;
  let realStore: ComparusGameState;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComparusGame]

    }).compileComponents();

    fixture = TestBed.createComponent(ComparusGame);
    component = fixture.componentInstance;
    realStore = component.store;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize with store observables', () => {
    expect(component.field$).toBeDefined();
    expect(component.score$).toBeDefined();
    expect(component.isRunning$).toBeDefined();
    expect(component.reactionMs$).toBeDefined();
  });

  it('should render GameHeader and GameBoard', fakeAsync(() => {
    fixture.detectChanges();
    tick();
    fixture.detectChanges();

    const gameHeader = fixture.debugElement.query(By.directive(GameHeader));
    const gameBoard = fixture.debugElement.query(By.directive(GameBoard));

    expect(gameHeader).toBeTruthy();
    expect(gameBoard).toBeTruthy();
  }));

  it('should pass correct inputs to GameHeader', fakeAsync(() => {
    fixture.detectChanges();
    tick();
    fixture.detectChanges();

    const headerComponent = fixture.debugElement.query(By.directive(GameHeader)).componentInstance;

    expect(headerComponent.reactionMs).toBe(1000);
    expect(headerComponent.score).toEqual({ player: 0, computer: 0 });
    expect(headerComponent.isRunning).toBe(false);
  }));

  it('should pass correct inputs to GameBoard', fakeAsync(() => {
    fixture.detectChanges();
    tick();
    fixture.detectChanges();

    const boardComponent = fixture.debugElement.query(By.directive(GameBoard)).componentInstance;

    expect(boardComponent.field.length).toBe(100);
    expect(boardComponent.field[0]).toEqual({ row: 0, col: 0, color: 'idle' });
    expect(boardComponent.field[1]).toEqual({ row: 0, col: 1, color: 'idle' });
    expect(boardComponent.field[10]).toEqual({ row: 1, col: 0, color: 'idle' });
    expect(boardComponent.isRunning).toBe(false);
  }));

  it('should call store.start when setGameState is called', () => {
    spyOn(realStore, 'start');
    component.setGameState();
    expect(realStore.start).toHaveBeenCalled();
  });

  it('should call store.setReactionMs when setReactionsMs is called', () => {
    spyOn(realStore, 'setReactionMs');
    const testMs = 1500;
    component.setReactionsMs(testMs);
    expect(realStore.setReactionMs).toHaveBeenCalledWith(testMs);
  });

  it('should call store.clickCell when setClickedCell is called', () => {
    spyOn(realStore, 'clickCell');
    const testCell = { row: 2, col: 3 };
    component.setClickedCell(testCell);
    expect(realStore.clickCell).toHaveBeenCalledWith(testCell);
  });

  it('should handle template event binding for GameHeader', fakeAsync(() => {
    spyOn(component, 'setGameState');
    spyOn(component, 'setReactionsMs');

    fixture.detectChanges();
    tick();
    fixture.detectChanges();

    const headerComponent = fixture.debugElement.query(By.directive(GameHeader)).componentInstance;

    headerComponent.setGameState.emit();
    expect(component.setGameState).toHaveBeenCalled();

    headerComponent.setReactionsMs.emit(1200);
    expect(component.setReactionsMs).toHaveBeenCalledWith(1200);
  }));

  it('should handle template event binding for GameBoard', fakeAsync(() => {
    spyOn(component, 'setClickedCell');

    fixture.detectChanges();
    tick();
    fixture.detectChanges();

    const boardComponent = fixture.debugElement.query(By.directive(GameBoard)).componentInstance;

    const testCell = { row: 1, col: 2 };
    boardComponent.clickedCell.emit(testCell);
    expect(component.setClickedCell).toHaveBeenCalledWith(testCell);
  }));

  it('should integrate with real store methods', () => {
    spyOn(realStore, 'start');
    spyOn(realStore, 'setReactionMs');
    spyOn(realStore, 'clickCell');

    const testData = { row: 4, col: 5 };

    component.setGameState();
    component.setReactionsMs(2000);
    component.setClickedCell(testData);

    expect(realStore.start).toHaveBeenCalledTimes(1);
    expect(realStore.setReactionMs).toHaveBeenCalledWith(2000);
    expect(realStore.clickCell).toHaveBeenCalledWith(testData);
  });

  it('should update UI when game state changes', fakeAsync(() => {
    spyOn(realStore, 'start').and.callThrough();

    component.setGameState();
    fixture.detectChanges();
    tick();
    fixture.detectChanges();

    const headerComponent = fixture.debugElement.query(By.directive(GameHeader)).componentInstance;
    const boardComponent = fixture.debugElement.query(By.directive(GameBoard)).componentInstance;

    expect(realStore.start).toHaveBeenCalled();
    expect(boardComponent.field).toBeDefined();
    expect(headerComponent.score).toBeDefined();
  }));
});
