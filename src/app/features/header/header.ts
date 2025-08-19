import { ChangeDetectionStrategy, ChangeDetectorRef, Component, DestroyRef, OnInit} from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatIconButton} from '@angular/material/button';
import {ThemeService} from '../../core/services/theme.service';
import {ThemeMode} from './models/theme-mode.type';
import {takeUntilDestroyed} from '@angular/core/rxjs-interop';
import {Router} from '@angular/router';
import {SkeletonIfDirective} from '../../shared/directives/skeleton-if';
import {Store} from '@ngrx/store';
import {AppState} from '../../state/app.state';
import {selectIsLoading} from '../../state/app.selectors';
import {AsyncPipe} from '@angular/common';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-header',
  imports: [MatIconModule, MatIconButton, SkeletonIfDirective, AsyncPipe,],
  templateUrl: './header.html',
  styleUrl: './header.scss',
  providers: [SkeletonIfDirective],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Header implements OnInit{
  public currentThemeMode: ThemeMode = 'light';

  constructor(
    private themeService: ThemeService,
    private cdr: ChangeDetectorRef,
    private destroyRef: DestroyRef,
    private router: Router,
    private store: Store
  ) {}

  ngOnInit(): void {
   this.streamCurrentThemeMode();
  }

  public toggleThemeMode(): void {
    this.themeService.toggleTheme();
  }

  public goToMainPage(): void {
    this.router.navigate(['/'], { queryParamsHandling: 'preserve' });
  }

  private streamCurrentThemeMode(): void {
    this.themeService.themeChanges()
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe(theme => {
        this.currentThemeMode = theme;
        this.cdr.markForCheck();
      });
  }

  get isLoading$(): Observable<boolean> {
    return this.store.select(selectIsLoading);
  }
}
