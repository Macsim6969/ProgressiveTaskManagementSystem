import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component, DestroyRef,
  EventEmitter,
  Input, OnChanges,
  Output, SimpleChanges
} from '@angular/core';
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import {Score} from '../../models/game-state.interface';
import {MatButton} from '@angular/material/button';
import {takeUntilDestroyed} from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-game-header',
  imports: [
    FormsModule,
    MatButton,
    ReactiveFormsModule
  ],
  templateUrl: './game-header.html',
  styleUrl: './game-header.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GameHeader implements AfterViewInit, OnChanges {
  @Input({required: true}) reactionMs!: number;
  @Input({required: true}) score!: Score;
  @Input({required: true}) isRunning!: boolean;

  @Output() setReactionsMs: EventEmitter<number> = new EventEmitter<number>();
  @Output() setGameState: EventEmitter<void> = new EventEmitter<void>();

  public form = new FormGroup({
    reactionMs: new FormControl(this.reactionMs, [Validators.required, Validators.min(500)]),
  });

  constructor(
    private destroyRef: DestroyRef) {}

  ngOnChanges(changes: SimpleChanges) {
    if (changes['isRunning']) {
      if (changes['isRunning'].currentValue) {
        this.form.get('reactionMs')?.disable({ emitEvent: false });
      } else {
        this.form.get('reactionMs')?.enable({ emitEvent: false });
      }
    }
  }


  ngAfterViewInit() {
    this.initializeForm();
  }

  private initializeForm(): void {
    this.form.patchValue({
      reactionMs: this.reactionMs
    })
    this.form.get('reactionMs')?.valueChanges.pipe(
      takeUntilDestroyed(this.destroyRef)
    )
      .subscribe(data => {
        if (data && data === 0 || data === null) {
          this.form.get('reactionMs')?.setValue(1000, {emitEvent: false});
        }
        this.setReactionsMs.emit(data ? data : 1000);
      })
  }

  public startGame(): void {
    this.setGameState.emit()
  }

  public onReactionsChange(ms: number): void {
    this.setReactionsMs.emit(ms);
  }
}
