import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import { WhatNextComponent } from './what-next/what-next.component';
import { ProductDetailsComponent } from './product-details/product-details.component';

//cia apsirasys visi aplikacijos puslapiai
const routes: Routes = [
  
  { path: 'first-component', component: FirstComponent },
  { path: 'second-component', component: SecondComponent },

  // product-details
  {path: 'products/:id', component: ProductDetailsComponent },

  { path: 'what-next-component', component: WhatNextComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  
 }
