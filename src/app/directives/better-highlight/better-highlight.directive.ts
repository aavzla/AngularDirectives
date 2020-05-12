import {
  Directive,
  Renderer2,
  OnInit,
  ElementRef,
  HostListener,
  HostBinding,
  Input
} from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {
  //Host Binding uses the DOM property. please visit, https://angular.io/api/core/HostBinding.
  @HostBinding('style.backgroundColor') backgroundColor: string;

  //Thes properties will be used with property binding to select the colors
  @Input() defaultColor: string;
  @Input('test') highlightColor: string;

  //To see the Renderer2 information, please visit https://angular.io/api/core/Renderer2.
  constructor(private elRef: ElementRef, private renderer: Renderer2) {
    console.log(this.constructor.name + ' constructor called.');

    //These properties are initialized with the values at the constructor. Only one time.
    this.defaultColor = 'transparent';
    this.highlightColor = 'lightblue';
    console.log(this.constructor.name + ' this is the defaultColor value ' + this.defaultColor)
    console.log(this.constructor.name + ' this is the highlightColor value ' + this.highlightColor)
  }

  ngOnInit() {
    console.log(this.constructor.name + ' ngOnInit called.');
    //this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'lightblue');

    //Properties initialized by ngOnInit. This will override the property binding values set in the HTML element.
    //this.defaultColor = 'transparent';
    //this.highlightColor = 'lightblue';
    console.log(this.constructor.name + ' this is the defaultColor value ' + this.defaultColor)
    console.log(this.constructor.name + ' this is the highlightColor value ' + this.highlightColor)

    //This initialized the background color for the element. For testing purposes, you can choose a different color to see.
    this.backgroundColor = this.defaultColor;
  }

  @HostListener('mouseenter') mouseOver(eventData: Event) {
    //If you uncomment the console log, you will see that the eventData is undefined. This is used only for the signature of the interface.
    //console.log(eventData);

    //The renderer2 setStyle uses the direct DOM element and abstract from that.
    //Also, it uses the CSS style key/value to set the style. Please visit, https://angular.io/api/core/Renderer2#setStyle.
    //this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'lightblue');

    //This uses the HostBinding approach to do some styling.
    this.backgroundColor = this.highlightColor;
  }

  @HostListener('mouseleave') mouseLeave(eventData: Event) {
    //If you uncomment the console log, you will see that the eventData is undefined. This is used only for the signature of the interface.
    //console.log(eventData);

    //this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'transparent');

    //This uses the HostBinding approach to do some styling.
    this.backgroundColor = this.defaultColor;
  }
}
