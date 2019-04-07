import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxBalanceTextDirective } from './ngx-balance-text.directive';

describe('NgxBalanceTextDirective', () => {
  let component: NgxBalanceTextDirective;
  let fixture: ComponentFixture<NgxBalanceTextDirective>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [NgxBalanceTextDirective]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxBalanceTextDirective);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
