import {Injectable} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ThemeMode} from '../../features/header/models/theme-mode.type';
import {BehaviorSubject} from 'rxjs';

@Injectable(
  {
    providedIn: 'root'
  }
)

export class ThemeService {
  private theme$ = new BehaviorSubject<ThemeMode>('light');

  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.initTheme();
    this.watchThemeFromQuery();
  }

  private initTheme(): void {
    const themeFromQuery = this.route.snapshot.queryParamMap.get('theme') as ThemeMode | null;
    this.setThemeMode(themeFromQuery || 'light', false);
  }

  private watchThemeFromQuery(): void {
    this.route.queryParamMap.subscribe(params => {
      const theme = params.get('theme') as ThemeMode | null;
      if (theme && theme !== this.theme$.value) {
        this.setThemeMode(theme, false);
      }
    });
  }

  private setThemeMode(theme: ThemeMode, updateQuery: boolean = true) {
    this.theme$.next(theme);
    document.documentElement.setAttribute('data-theme', theme);

    if (updateQuery) {
      this.router.navigate([], {
        queryParams: { theme },
        queryParamsHandling: 'merge'
      });
    }
  }

  public toggleTheme(): void {
    this.setThemeMode(this.theme$.value === 'dark' ? 'light' : 'dark');
  }

  public themeChanges() {
    return this.theme$.asObservable();
  }
}
