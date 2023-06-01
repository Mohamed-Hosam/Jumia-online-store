import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoriesComponent } from './categories/categories.component';
import {MatTabsModule} from '@angular/material/tabs';
import {MatButtonModule} from '@angular/material/button';
import { CategoryProductsComponent } from './category-products/category-products.component';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatCardModule} from '@angular/material/card';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    CategoriesComponent,
    CategoryProductsComponent
  ],
  imports: [
    CommonModule,
    MatTabsModule,
    MatButtonModule,
    MatGridListModule,
    MatCardModule,
    RouterModule
  ],
  exports:[
    CategoriesComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class CategoriesModule { }
