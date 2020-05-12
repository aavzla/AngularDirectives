import {
  Directive,
  Renderer2,
  OnInit,
  ElementRef,
  HostListener,
  HostBinding
} from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {
  //Host Binding uses the DOM property. please visit, https://angular.io/api/core/HostBinding.
  @HostBinding('style.backgroundColor') backgroundColor: string;

  //To see the Renderer2 information, please visit https://angular.io/api/core/Renderer2.
  constructor(private elRef: ElementRef, private renderer: Renderer2) { }

  ngOnInit() {
    //this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'lightblue');
    //This initialized the background color for the element. For testing purposes, you can choose a different color to see.
    this.backgroundColor = 'transparent';
  }

  @HostListener('mouseenter') mouseOver(eventData: Event) {
    //If you uncomment the console log, you will see that the eventData is undefined. This is used only for the signature of the interface.
    //console.log(eventData);

    //The renderer2 setStyle uses the direct DOM element and abstract from that.
    //Also, it uses the CSS style key/value to set the style. Please visit, https://angular.io/api/core/Renderer2#setStyle.
    //this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'lightblue');

    //This uses the HostBinding approach to do some styling.
    this.backgroundColor = 'lightblue';
  }

  @HostListener('mouseleave') mouseLeave(eventData: Event) {
    //If you uncomment the console log, you will see that the eventData is undefined. This is used only for the signature of the interface.
    //console.log(eventData);

    //this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'transparent');

    //This uses the HostBinding approach to do some styling.
    this.backgroundColor = 'transparent';
  }
}
