import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Slide1Component } from './_slides/slide1/slide1.component';
import { Slide2Component } from './_slides/slide2/slide2.component';
import { Slide3Component } from './_slides/slide3/slide3.component';
import { Slide4Component } from './_slides/slide4/slide4.component';
import { Slide5Component } from './_slides/slide5/slide5.component';
import { Slide6Component } from './_slides/slide6/slide6.component';
import { Slide7Component } from './_slides/slide7/slide7.component';
import { Slide8Component } from './_slides/slide8/slide8.component';
import { Slide9Component } from './_slides/slide9/slide9.component';
import { Slide10Component } from './_slides/slide10/slide10.component';
import { Slide11Component } from './_slides/slide11/slide11.component';
import { Slide12Component } from './_slides/slide12/slide12.component';
import { Slide13Component } from './_slides/slide13/slide13.component';
import { Slide14Component } from './_slides/slide14/slide14.component';
import { Slide15Component } from './_slides/slide15/slide15.component';
import { Slide16Component } from './_slides/slide16/slide16.component';

@NgModule({
  declarations: [
    AppComponent,
    Slide1Component,
    Slide2Component,
    Slide3Component,
    Slide4Component,
    Slide5Component,
    Slide6Component,
    Slide7Component,
    Slide8Component,
    Slide9Component,
    Slide10Component,
    Slide11Component,
    Slide12Component,
    Slide13Component,
    Slide14Component,
    Slide15Component,
    Slide16Component,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
