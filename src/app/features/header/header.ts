import { ChangeDetectionStrategy, ChangeDetectorRef, Component, DestroyRef, OnInit} from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatIconButton} from '@angular/material/button';
import {ThemeService} from '../../core/services/theme.service';
import {ThemeMode} from './models/theme-mode.type';
import {takeUntilDestroyed} from '@angular/core/rxjs-interop';
import {Router} from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [MatIconModule, MatIconButton],
  templateUrl: './header.html',
  styleUrl: './header.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Header implements OnInit{
  public currentThemeMode: ThemeMode = 'light';

  constructor(
    private themeService: ThemeService,
    private cdr: ChangeDetectorRef,
    private destroyRef: DestroyRef,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.themeService.themeChanges()
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe(theme => {
        this.currentThemeMode = theme;
        this.cdr.markForCheck();
      });
  }

  public toggleThemeMode(): void {
    this.themeService.toggleTheme();
  }

  public goToMainPage(): void {
    this.router.navigate(['/'], { queryParamsHandling: 'preserve' });
  }
}
