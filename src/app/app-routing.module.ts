import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
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


const routes: Routes = [
  { path: 'slide-1', component: Slide1Component },
  { path: 'slide-2', component: Slide2Component },
  { path: 'slide-3', component: Slide3Component },
  { path: 'slide-4', component: Slide4Component },
  { path: 'slide-5', component: Slide5Component },
  { path: 'slide-6', component: Slide6Component },
  { path: 'slide-7', component: Slide7Component },
  { path: 'slide-8', component: Slide8Component },
  { path: 'slide-9', component: Slide9Component },
  { path: 'slide-10', component: Slide10Component },
  { path: 'slide-11', component: Slide11Component },
  { path: 'slide-12', component: Slide12Component },
  { path: 'slide-13', component: Slide13Component },
  { path: 'slide-14', component: Slide14Component },
  { path: 'slide-15', component: Slide15Component },
  { path: 'slide-16', component: Slide16Component },
  { path: '', pathMatch: 'full', redirectTo: 'slide-1' },
  { path: '**', component: Slide1Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
