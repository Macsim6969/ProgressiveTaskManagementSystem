import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ComparusGame } from './comparus-game';
import { of } from 'rxjs';
import { ComparusGameState } from './state/comparus-game.state';

describe('ComparusGame', () => {
  let component: ComparusGame;
  let fixture: ComponentFixture<ComparusGame>;
  let mockStore: Partial<ComparusGameState>;

  beforeEach(async () => {
    mockStore = {
      field$: of([]),
      score$: of({ player: 0, computer: 0 }),
      isRunning$: of(false),
      reactionMs$: of(200),
      start: jasmine.createSpy('start'),
      setReactionMs: jasmine.createSpy('setReactionMs'),
      clickCell: jasmine.createSpy('clickCell')
    };

    await TestBed.configureTestingModule({
      imports: [ComparusGame],
      providers: [
        { provide: ComparusGameState, useValue: mockStore }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(ComparusGame);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call store.start when setGameState is called', () => {
    component.setGameState();
    expect(mockStore.start).toHaveBeenCalled();
  });

  it('should call store.setReactionMs when setReactionsMs is called', () => {
    component.setReactionsMs(300);
    expect(mockStore.setReactionMs).toHaveBeenCalledWith(300);
  });

  it('should call store.clickCell when setClickedSell is called', () => {
    const cell = { row: 1, col: 2 };
    component.setClickedSell(cell);
    expect(mockStore.clickCell).toHaveBeenCalledWith(cell);
  });
});
