import {Component, Input} from '@angular/core';
import {NgClass, NgFor, NgStyle} from '@angular/common';

@Component({
  selector: 'app-skeleton-loader',
  imports: [NgClass, NgStyle, NgFor],
  templateUrl: './skeleton-loader.html',
  styleUrl: './skeleton-loader.scss'
})
export class SkeletonLoader {
  @Input() width: string = '100%';
  @Input() height: string = '16px';
  @Input() borderRadius: string = '4px';
  @Input() count: number = 1;
  @Input() variant: 'text' | 'circle' | 'rect' = 'text';
}
