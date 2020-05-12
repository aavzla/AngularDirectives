import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appUnless]'
})

export class UnlessDirective {
  @Input() set appUnless(condition: boolean) {
    if (!condition) {
      //Condition is false, we display.
      this.vcref.createEmbeddedView(this.templateRef);
    } else {
      //Condition is true, we display nothing.
      this.vcref.clear();
    }
  }

  //TemplateRef is the ng-template to display or not.
  //ViewContainerRef is the place where we are inserting this template.
  constructor(private templateRef: TemplateRef<any>, private vcref: ViewContainerRef) { }

}
