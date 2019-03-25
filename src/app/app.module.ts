//modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

//pipes
import { MyUpperPipe } from './product/nameUpper.pipe';
import { DiscountPipe } from './product/discount.pipe';
import { ProductSearch } from './product/productSearch.pipe';

//components
import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import { StarComponent } from './shared/star.component';

//services
import { ProductService } from './product/product.service';
@NgModule({
  //all module declares here
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
    
  ],
  //all the component and pipes declares here
  declarations: [
    AppComponent,
    ProductComponent,
    MyUpperPipe,
    DiscountPipe,
    ProductSearch,
    StarComponent,
  ],

  //all the services here 
  providers: [
    ProductService,
  ],

  //only first component
  bootstrap: [AppComponent]
})
export class AppModule { }
