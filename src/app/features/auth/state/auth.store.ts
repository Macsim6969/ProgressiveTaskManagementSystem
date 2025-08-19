import {Injectable} from '@angular/core';
import {ComponentStore} from '@ngrx/component-store';
import {AuthService} from '../../../core/services/auth.service';
import {switchMap, tap} from 'rxjs';
import {Store} from '@ngrx/store';
import {setLoading, setUser} from '../../../state/app.actions';
import {Router} from '@angular/router';

interface State {

}

@Injectable()
export class AuthStore extends ComponentStore<State> {
  constructor(
    private authService: AuthService,
    private store: Store,
    private router: Router
  ) {
    super()
  }

  public loginUser = this.effect<{ email: string, password: string }>((trigger$) => trigger$.pipe(
    switchMap((loginData) => {
      return this.authService.getUser(loginData.email, loginData.password).pipe(
        tap((data) => {
          this.store.dispatch(setUser({user: data.user}));
          this.store.dispatch(setLoading({isLoading: false}));
          this.router.navigate(['/dashboard']);
        })
      )
    })
  ))
}
