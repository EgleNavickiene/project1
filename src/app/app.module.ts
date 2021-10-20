import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsTableComponent } from './product/product-table.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatSliderModule } from '@angular/material/slider';
import {MatButtonModule} from '@angular/material/button';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatTableModule} from '@angular/material/table';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import { WhatNextComponent } from './what-next/what-next.component';



@NgModule({
  declarations: [
    AppComponent,
    ProductsTableComponent,
    FirstComponent,
    SecondComponent,
    WhatNextComponent,    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    MatTableModule,    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
