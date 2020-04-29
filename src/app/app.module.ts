import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ProductElementComponent } from './product-element/product-element.component';
import { ProductAddComponent } from './product-add/product-add.component';

@NgModule({
  declarations: [AppComponent, ProductElementComponent, ProductAddComponent],
  imports: [BrowserModule, ReactiveFormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
