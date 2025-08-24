import {Component, EventEmitter, Input, Output} from '@angular/core';
import { MatIconModule} from '@angular/material/icon';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-search',
    imports: [
      MatIconModule,
      FormsModule
    ],
  templateUrl: './search.html',
  styleUrl: './search.scss'
})
export class Search {
  @Input() search: string = '';
  @Output() searchChange = new EventEmitter<string>();

  public onInput(value: string): void {
    this.search = value;
    this.searchChange.emit(value);
  }
}
