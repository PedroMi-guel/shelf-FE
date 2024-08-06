import { Directive, TemplateRef, ViewContainerRef } from "@angular/core";

@Directive({
  selector: '[appMiDirectiva]'
})
export class MiDirectivaDirective {
  constructor(private templateRef: TemplateRef<any>, private viewContainer: ViewContainerRef) {}

  ngOnInit() {
    this.viewContainer.createEmbeddedView(this.templateRef);  
  }
}
