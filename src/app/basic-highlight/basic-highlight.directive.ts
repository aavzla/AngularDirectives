import { Directive, ElementRef, OnInit } from "@angular/core"

@Directive({
  //The selector value is appBasicHighlight and the brackets here tells to Angular that this selector should be an attribute only.
  selector: '[appBasicHighlight]'
  //The selector value without the brackets will tell Angular that this selector should be an HTML element.
  //selector: 'appBasicHighlight'
})

export class BasicHighlightDirective implements OnInit {
  constructor(private elementRef: ElementRef) { }

  ngOnInit() {
    this.elementRef.nativeElement.style.backgroundColor = 'green'
  }
}
