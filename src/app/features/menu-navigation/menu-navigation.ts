import { Component } from '@angular/core';
import {MatIconButton} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';

@Component({
  selector: 'app-menu-navigation',
  imports: [
    MatIconButton,
    MatIconModule,
  ],
  templateUrl: './menu-navigation.html',
  styleUrl: './menu-navigation.scss'
})
export class MenuNavigation {

}
