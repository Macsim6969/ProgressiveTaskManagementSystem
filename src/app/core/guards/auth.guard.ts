import {Injectable} from '@angular/core';
import {
  CanActivate,
  Router,
} from '@angular/router';
import {AuthService} from '../services/auth.service';
import {Store} from '@ngrx/store';
import {setLoading} from '../../state/app.actions';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(
    private authService: AuthService,
    private router: Router,
    private store: Store
  ) {
  }

  public canActivate(): boolean {
    if (this.authService.isAuthenticated()) {
      return true;
    }
    this.store.dispatch(setLoading({isLoading: true}));
    this.router.navigate(['/auth']);
    return false;
  }
}
