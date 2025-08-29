import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GameWinnerModal } from './game-winner-modal';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { By } from '@angular/platform-browser';
import 'zone.js';

describe('GameWinnerModal', () => {
  let component: GameWinnerModal;
  let fixture: ComponentFixture<GameWinnerModal>;
  let dialogRefSpy: jasmine.SpyObj<MatDialogRef<GameWinnerModal>>;

  const mockData = {
    winner: 'player',
    score: { player: 3, computer: 1 }
  };

  beforeEach(async () => {
    dialogRefSpy = jasmine.createSpyObj('MatDialogRef', ['close']);

    await TestBed.configureTestingModule({
      imports: [GameWinnerModal],
      providers: [
        { provide: MAT_DIALOG_DATA, useValue: mockData },
        { provide: MatDialogRef, useValue: dialogRefSpy }
      ]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GameWinnerModal);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display correct winner text', () => {
    const winnerEl = fixture.debugElement.query(By.css('.winner')).nativeElement;
    expect(winnerEl.textContent.trim()).toBe('🎉 You win!');
  });

  it('should display correct score', () => {
    const scoreEl = fixture.debugElement.query(By.css('.score')).nativeElement;
    expect(scoreEl.textContent.trim()).toBe('Score: You 3 — 1 Computer');
  });

  it('should call playAgain and close dialog with true', () => {
    component.playAgain();
    expect(dialogRefSpy.close).toHaveBeenCalledWith(true);
  });
});
