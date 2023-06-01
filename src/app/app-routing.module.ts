import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './products/products/products.component';
import { ProductDetailsComponent } from './products/product-details/product-details.component';
import { LoginComponent } from './login-and-signup/login/login.component';
import { SignupComponent } from './login-and-signup/signup/signup.component';
import { TermsComponent } from './login-and-signup/terms/terms.component';
import { HomeComponent } from './home/home/home.component';
import { CarouselComponent } from './home/carousel/carousel.component';
import { CartComponent } from './cart/cart/cart.component';
import { CategoriesComponent } from './categories/categories/categories.component';
import { CategoryProductsComponent } from './categories/category-products/category-products.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'products/:id', component: ProductDetailsComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'terms', component: TermsComponent },
  { path: 'cart', component: CartComponent },
  { path: 'categories', component: CategoriesComponent },
  { path: 'products/category/:category', component: CategoryProductsComponent },

  {path: '**', redirectTo: 'home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],

  exports: [RouterModule],
})
export class AppRoutingModule {}
