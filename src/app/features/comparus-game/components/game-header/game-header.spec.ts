import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { GameHeader } from './game-header';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { By } from '@angular/platform-browser';
import { ComparusGameState } from '../../state/comparus-game.state';
import { ComponentStore } from '@ngrx/component-store';
import { Score } from '../../models/game-state.interface';
import {BehaviorSubject, of} from 'rxjs';
import 'zone.js';

describe('ComparusGameHeader', () => {
  let component: GameHeader;
  let fixture: ComponentFixture<GameHeader>;
  let store: ComparusGameState;

  const mockScore: Score = { player: 2, computer: 3 };
  const reactionMs = 200;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormsModule, MatInputModule, MatButtonModule, GameHeader],
      providers: [ComparusGameState, ComponentStore]
    }).compileComponents();

    store = TestBed.inject(ComparusGameState);

    fixture = TestBed.createComponent(GameHeader);
    component = fixture.componentInstance;

    component.reactionMs$ = store.reactionMs$;
    component.score$ = store.score$;
    component.isRunning$ = store.isRunning$;

    store.patchState({
      score: mockScore,
      reactionMs: reactionMs,
      isRunning: false
    });

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

  it('should display correct score', fakeAsync(() => {
    tick();
    fixture.detectChanges();

    const playerBadge = fixture.debugElement.query(By.css('.badge.player')).nativeElement;
    const computerBadge = fixture.debugElement.query(By.css('.badge.computer')).nativeElement;

    expect(playerBadge.textContent.trim()).toBe('Player: 2');
    expect(computerBadge.textContent.trim()).toBe('Computer: 3');
  }));

  it('should disable input and button when isRunning is true', fakeAsync(() => {
    const isRunningSubject = new BehaviorSubject<boolean>(false);
    component.isRunning$ = isRunningSubject.asObservable();
    fixture.detectChanges();

    isRunningSubject.next(true);
    tick();
    fixture.detectChanges();
    tick();
    fixture.detectChanges();

    const input: HTMLInputElement = fixture.nativeElement.querySelector('input');
    const button: HTMLButtonElement = fixture.nativeElement.querySelector('button');

    expect(input.disabled).toBeTrue();
    expect(button.disabled).toBeTrue();
  }));
});

