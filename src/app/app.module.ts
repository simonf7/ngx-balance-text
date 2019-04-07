import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NgxBalanceTextDirective } from './ngx-balance-text.directive';

@NgModule({
  declarations: [
    AppComponent,
    NgxBalanceTextDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
