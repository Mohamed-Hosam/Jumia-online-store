import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProductsModule } from './products/products.module';
import { LoginAndSignupModule } from './login-and-signup/login-and-signup.module';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { HomeModule } from './home/home.module';
import { CartModule } from './cart/cart.module';
import { CategoriesModule } from './categories/categories.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    BrowserAnimationsModule,
    ProductsModule,
    LoginAndSignupModule,
    HomeModule,
    CartModule,
    CategoriesModule
  ],
  providers: [NavbarComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
