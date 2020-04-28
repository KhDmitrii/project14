import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { ProductInterfaceComponent } from './product-interface/product-interface.component';
import { ProductElementComponent } from './product-element/product-element.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductInterfaceComponent,
    ProductElementComponent,
  ],
  imports: [BrowserModule, FormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
