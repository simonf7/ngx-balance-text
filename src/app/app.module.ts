import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NgxBalanceTextDirective } from 'projects/ngx-balance-text/src/public-api';

@NgModule({
  declarations: [AppComponent, NgxBalanceTextDirective],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
