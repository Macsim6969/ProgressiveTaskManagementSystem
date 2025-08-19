import {
  ComponentRef,
  Directive,
  EmbeddedViewRef,
  Injector,
  Input,
  OnDestroy,
  TemplateRef,
  ViewContainerRef
} from '@angular/core';
import {SkeletonLoader} from '../components/skeleton-loader/skeleton-loader';

@Directive({
  selector: '[skeletonIf]'
})
export class SkeletonIfDirective implements OnDestroy{

  private _loading = false;
  private viewRef?: EmbeddedViewRef<any>;
  private skeletonRef?: ComponentRef<SkeletonLoader>;
  private elementSize = { width: '100%', height: '16px' };
  private resizeObserver?: ResizeObserver;

  @Input('skeletonIf') set loading(value: boolean) {
    if (value) {
      // При первом загрузке показываем контент (чтобы замерить)
      this._loading = false;
      this.updateView();

      setTimeout(() => {
        const el = this.getFirstElement();
        if (el) this.measureElement(el);
        this._loading = true;
        this.updateView();
      }, 0);
    } else {
      this._loading = value;
      this.updateView();
    }
  }

  @Input('skeletonIfVariant') variant: 'text' | 'circle' | 'rect' = 'text';
  @Input('skeletonIfCount') count: number = 1;
  @Input('skeletonIfBorderRadius') borderRadius: string = '4px';
  @Input('skeletonIfWidth') width?: string;
  @Input('skeletonIfHeight') height?: string;

  constructor(
    private templateRef: TemplateRef<any>,
    private vcr: ViewContainerRef,
    private injector: Injector
  ) {}

  private updateView() {
    this.vcr.clear();

    if (this._loading) {
      const w = this.width ?? this.elementSize.width;
      const h = this.height ?? this.elementSize.height;

      this.skeletonRef = this.vcr.createComponent(SkeletonLoader, {
        injector: this.injector
      });

      this.skeletonRef.setInput('variant', this.variant);
      this.skeletonRef.setInput('width', w);
      this.skeletonRef.setInput('height', h);
      this.skeletonRef.setInput('count', this.count);
      this.skeletonRef.setInput('borderRadius', this.borderRadius);
    } else {
      this.viewRef = this.vcr.createEmbeddedView(this.templateRef);
      this.viewRef.detectChanges();


      setTimeout(() => {
        const el = this.getFirstElement();
        if (el) {
          this.observeElementSize(el);
        }
      });
    }
  }




  private getFirstElement(): HTMLElement | null {
    if (!this.viewRef) return null;
    for (const node of this.viewRef.rootNodes) {
      if (node instanceof HTMLElement) return node;
    }
    return null;
  }

  private observeElementSize(el: HTMLElement) {
    this.resizeObserver?.disconnect();

    this.resizeObserver = new ResizeObserver(() => {
      this.measureElement(el);
    });
    this.resizeObserver.observe(el);

    // Делать замер с задержкой, чтобы гарантировать рендеринг
    requestAnimationFrame(() => this.measureElement(el));
  }

  private measureElement(el: HTMLElement) {
    const rect = el.getBoundingClientRect();
    if (rect.width && rect.height) {
      this.elementSize = {
        width: `${rect.width}px`,
        height: `${rect.height}px`
      };
    } else {
      // fallback
      this.elementSize = { width: '100%', height: '16px' };
    }
  }

  ngOnDestroy() {
    this.resizeObserver?.disconnect();
  }

}
