import { Component } from '@angular/core';
import {AuthService} from '../../core/services/auth.service';
import {Router} from '@angular/router';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {AuthStore} from './state/auth.store';
import {Store} from '@ngrx/store';
import {MatButton} from '@angular/material/button';

@Component({
  selector: 'app-auth',
  imports: [
    ReactiveFormsModule,
    MatButton
  ],
  providers: [
    AuthStore
  ],
  templateUrl: './auth.html',
  styleUrl: './auth.scss'
})
export class Auth {
  public loginForm: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)]),
  });

  constructor(
    private authStore: AuthStore,
   ) {}

  public onLogin(): void {
    if(this.loginForm.invalid) {
      return;
    }

    this.authStore.loginUser(this.loginForm.value)
  }
}
