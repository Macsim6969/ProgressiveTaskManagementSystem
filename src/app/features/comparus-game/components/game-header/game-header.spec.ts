import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GameHeader } from './game-header';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { of } from 'rxjs';
import { By } from '@angular/platform-browser';
import { Score } from '../../models/game-state.interface';

describe('ComparusGameHeader', () => {
  let component: GameHeader;
  let fixture: ComponentFixture<GameHeader>;

  const mockScore: Score = { player: 2, computer: 3 };
  const reactionMs = 200;
  const isRunning = false;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormsModule, MatInputModule, MatButtonModule, GameHeader]
    }).compileComponents();

    fixture = TestBed.createComponent(GameHeader);
    component = fixture.componentInstance;

    component.reactionMs$ = of(reactionMs);
    component.score$ = of(mockScore);
    component.isRunning$ = of(isRunning);

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

  it('should emit setReactionsMs on input change', () => {
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
    component.isRunning$ = of(true);
    fixture.detectChanges();

    const input = fixture.debugElement.query(By.css('input')).nativeElement;
    const button = fixture.debugElement.query(By.css('button.primary')).nativeElement;

    expect(input.disabled).toBeTrue();
    expect(button.disabled).toBeTrue();
  });
});
