import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsComponent } from './products/products.component';
import { ProductsdetailsComponent } from './productsdetails/productsdetails.component';
import { ProductsbrandComponent } from './productsbrand/productsbrand.component';
import { ProductscategoryComponent } from './productscategory/productscategory.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { ReviewsdetailsComponent } from './reviewsdetails/reviewsdetails.component';
import { ReviewsauthorComponent } from './reviewsauthor/reviewsauthor.component';
import { ReviewsallComponent } from './reviewsall/reviewsall.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    ProductsdetailsComponent,
    ProductsbrandComponent,
    ProductscategoryComponent,
    ReviewsComponent,
    ReviewsdetailsComponent,
    ReviewsauthorComponent,
    ReviewsallComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
