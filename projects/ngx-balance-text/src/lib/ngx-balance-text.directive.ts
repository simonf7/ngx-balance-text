import {
  Directive,
  ElementRef,
  Renderer2,
  AfterViewChecked
} from '@angular/core';
import balanceText from 'balance-text';

@Directive({
  selector: '[ngxBalanceText]'
})
export class NgxBalanceText implements AfterViewChecked {
  private className: string = null;

  private uuidv4() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
      var r = (Math.random() * 16) | 0,
        v = c == 'x' ? r : (r & 0x3) | 0x8;
      return v.toString(16);
    });
  }

  constructor(public el: ElementRef, public renderer: Renderer2) {}

  ngOnInit() {
    this.className = 'ngxBT-' + this.uuidv4();
    this.renderer.addClass(this.el.nativeElement, this.className);
    balanceText('.' + this.className, { watch: true });
  }

  ngAfterViewChecked() {
    balanceText.updateWatched();
  }

  ngOnDestroy() {
    // remove the class from the watched list
    if (this.className) {
      balanceText('.' + this.className, { watch: false });
    }
    this.className = null;
  }
}
