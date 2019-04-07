import { NgxBalanceText } from './ngx-balance-text.directive';
import { ElementRef } from '@angular/core';

export class MockElementRef extends ElementRef {
  constructor() {
    super(null);
  }
}

describe('NgxBalanceText', () => {
  it('should create an instance', () => {
    const directive = new NgxBalanceText(new MockElementRef());
    expect(directive).toBeTruthy();
  });
});
