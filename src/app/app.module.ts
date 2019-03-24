import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import { MyUpperPipe } from './product/nameUpper.pipe';
import { DiscountPipe } from './product/discount.pipe';
import { ProductSearch } from './product/productSearch.pipe';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    
  ],
  declarations: [
    AppComponent,
    ProductComponent,
    MyUpperPipe,
    DiscountPipe,
    ProductSearch,
  ], 
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
