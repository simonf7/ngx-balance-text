import { Directive, ElementRef } from '@angular/core';
import * as balanceText from 'balance-text';

@Directive({
  selector: '[ngxBalanceText]'
})
export class NgxBalanceTextDirective {
  constructor(el: ElementRef) {
    balanceText(el.nativeElement, { watch: true });
  }
}
