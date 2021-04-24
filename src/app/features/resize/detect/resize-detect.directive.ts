import {Directive, ElementRef, EventEmitter, OnDestroy, Output} from '@angular/core';
import {interval} from 'rxjs';

@Directive({
  selector: '[detectResize]'
})
export class ResizeDetectDirective implements OnDestroy {

  private previousSize: [any | undefined, any | undefined] = [undefined, undefined];

  private readonly checker = interval(100).subscribe(() => {
    const currentWidth = this.elementRef.nativeElement.offsetWidth;
    const currentHeight = this.elementRef.nativeElement.offsetHeight;
    if (currentWidth !== this.previousSize[0] || currentHeight !== this.previousSize[1]) {
      const next: [any, any] = [currentWidth, currentHeight];
      if (this.previousSize[0] !== undefined || this.previousSize[1] !== undefined) {
        this.detectResize.emit(next);
      }
      this.previousSize = next;
    }
  });

  constructor(private readonly elementRef: ElementRef) {
  }

  @Output()
  public readonly detectResize = new EventEmitter<[any, any]>();

  ngOnDestroy(): void {
    this.checker.unsubscribe();
  }
}
