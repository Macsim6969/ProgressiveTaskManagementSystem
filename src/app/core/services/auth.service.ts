import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, of, tap} from 'rxjs';
import {UserResponse} from '../../features/auth/models/auth-user.model';
import {user} from '../../features/auth/constants/user.constant';

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  constructor(private http: HttpClient) {
  }

  public getUser(email: string, password: string): Observable<UserResponse> {
    this.http.get<UserResponse>('');
    return of(user).pipe(
      tap((data: UserResponse) => {
        localStorage.setItem('jwt-token', data.token);
      })
    )
  }

  public logout(): void {
    localStorage.removeItem('jwt-token');
  }

  public isAuthenticated(): boolean {
    return !!localStorage.getItem('jwt-token');
  }
}
