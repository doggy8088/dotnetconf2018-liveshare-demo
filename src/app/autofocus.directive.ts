import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appAutofocus]'
})
export class AutofocusDirective {

  @Input() appAutofocus: boolean;

  constructor(private el: ElementRef) {
  }

  ngAfterViewInit() {
    if (this.appAutofocus) {
      this.el.nativeElement.focus();
    }
  }

}
