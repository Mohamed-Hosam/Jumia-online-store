import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { CarouselComponent } from './carousel/carousel.component';
import { ProductsModule } from '../products/products.module';

@NgModule({
  declarations: [
    HomeComponent,
    CarouselComponent
  ],
  imports: [
    CommonModule,
    ProductsModule
  ],
  exports:[
    HomeComponent,
    CarouselComponent
  ]
})
export class HomeModule { }
