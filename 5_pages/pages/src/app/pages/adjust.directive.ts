import { Directive, TemplateRef, ViewContainerRef, Input } from '@angular/core';

@Directive({
  selector: '[appAdjust]'
})
export class AdjustDirective {

  constructor(
    private tempRef: TemplateRef<any>,
    private viewRef: ViewContainerRef,
  ) { }

  @Input('appAdjust') set adjustPages(page: number) {
    console.log('page', page);
  }

}
