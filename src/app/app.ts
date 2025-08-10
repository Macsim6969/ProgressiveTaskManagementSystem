import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {Header} from './features/header/header';
import {MenuNavigation} from './features/menu-navigation/menu-navigation';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, MenuNavigation],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
}
