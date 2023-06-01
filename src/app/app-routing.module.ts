import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './products/products/products.component';
import { ProductDetailsComponent } from './products/product-details/product-details.component';
import { LoginComponent } from './login-and-signup/login/login.component';
import { SignupComponent } from './login-and-signup/signup/signup.component';
import { TermsComponent } from './login-and-signup/terms/terms.component';
import { HomeComponent } from './home/home/home.component';
import { CarouselComponent } from './home/carousel/carousel.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'home', component: CarouselComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'products/:id', component: ProductDetailsComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'terms', component: TermsComponent },
  // {path: '**', component: FormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],

  exports: [RouterModule],
})
export class AppRoutingModule {}
