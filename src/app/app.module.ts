import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NgxBalanceTextModule } from 'projects/ngx-balance-text/src/public-api';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, NgxBalanceTextModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
