import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { ProductsbrandComponent } from './productsbrand/productsbrand.component';
import { ProductscategoryComponent } from './productscategory/productscategory.component';
import { ProductsdetailsComponent } from './productsdetails/productsdetails.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { ReviewsallComponent } from './reviewsall/reviewsall.component';
import { ReviewsauthorComponent } from './reviewsauthor/reviewsauthor.component';
import { ReviewsdetailsComponent } from './reviewsdetails/reviewsdetails.component';

const routes: Routes = [
  { path: 'products', component: ProductsComponent, children: [
    { path: 'details/:id', component: ProductsdetailsComponent },
    { path: 'brand/:brand', component: ProductsbrandComponent },
    { path: 'category/:cat', component: ProductscategoryComponent }]
},
{ path: 'reviews', component: ReviewsComponent, children: [
    { path: 'details/:id', component: ReviewsdetailsComponent },
    { path: 'author/:id', component: ReviewsauthorComponent },
    { path: 'all/:id', component: ReviewsallComponent }]
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
