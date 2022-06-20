import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { ConvertNumberComponent } from './components/convert-number/convert-number.component';
import { SumNumberComponent } from './components/sum-number/sum-number.component';

@NgModule({
  declarations: [
    AppComponent,
    ConvertNumberComponent,
    SumNumberComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
