import { Directive, ElementRef } from '@angular/core';
import balanceText from 'balance-text';

@Directive({
  selector: '[ngxBalanceText]'
})
export class NgxBalanceText {
  constructor(el: ElementRef) {
    balanceText(el.nativeElement, { watch: true });
  }
}
