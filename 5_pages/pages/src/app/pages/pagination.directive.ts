import { Directive, TemplateRef, ViewContainerRef, Input } from '@angular/core';
import { PagesComponent } from './pages.component';

@Directive({
  selector: '[appPagination]'
})
export class PaginationDirective {

  constructor(
    private templateRef: TemplateRef<any>,
    private containerRef: ViewContainerRef,
    private pagesComp: PagesComponent
  ) { }
  
  @Input('appPagination') set render(maxPages: number) {
    for(let i=this.pagesComp.currentPage; i < maxPages; i++) {
      this.containerRef.createEmbeddedView(this.templateRef, { index:i })
    }
  }

}
