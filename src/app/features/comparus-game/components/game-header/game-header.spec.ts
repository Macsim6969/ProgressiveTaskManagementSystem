import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GameHeader } from './game-header';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { By } from '@angular/platform-browser';
import { Score } from '../../models/game-state.interface';
import 'zone.js';

describe('GameHeader', () => {
  let component: GameHeader;
  let fixture: ComponentFixture<GameHeader>;

  const mockScore: Score = { player: 2, computer: 3 };
  const reactionMs = 200;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormsModule, ReactiveFormsModule, MatButtonModule, GameHeader]
    }).compileComponents();

    fixture = TestBed.createComponent(GameHeader);
    component = fixture.componentInstance;

    component.reactionMs = reactionMs;
    component.score = mockScore;
    component.isRunning = false; // по умолчанию не запущено

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit setGameState on startGame', () => {
    spyOn(component.setGameState, 'emit');
    const button = fixture.debugElement.query(By.css('button.primary')).nativeElement;
    button.click();
    expect(component.setGameState.emit).toHaveBeenCalled();
  });

  it('should emit setReactionsMs on input change (direct method)', () => {
    spyOn(component.setReactionsMs, 'emit');
    component.onReactionsChange(300);
    expect(component.setReactionsMs.emit).toHaveBeenCalledWith(300);
  });

  it('should display correct score', () => {
    const playerBadge = fixture.debugElement.query(By.css('.badge.player')).nativeElement;
    const computerBadge = fixture.debugElement.query(By.css('.badge.computer')).nativeElement;

    expect(playerBadge.textContent.trim()).toBe('Player: 2');
    expect(computerBadge.textContent.trim()).toBe('Computer: 3');
  });

  it('should disable input and button when isRunning is true', () => {
    component.isRunning = true;

    component.ngOnChanges({
      isRunning: {
        currentValue: true,
        previousValue: false,
        firstChange: false,
        isFirstChange: () => false
      }
    });

    fixture.detectChanges();

    const input: HTMLInputElement = fixture.nativeElement.querySelector('input');
    const button: HTMLButtonElement = fixture.nativeElement.querySelector('button');

    expect(input.disabled).toBeTrue();
    expect(button.disabled).toBeTrue();
  });


});
