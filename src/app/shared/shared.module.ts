import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import {MatTabsModule} from '@angular/material/tabs';
import {MatCardModule} from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';

import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';


@NgModule({
  declarations: [
    NavbarComponent
  ],
  imports: [
    CommonModule,
    MatTabsModule,
    MatCardModule,
    MatToolbarModule,
    MatIconModule,
    MatDividerModule,
    MatButtonModule
  ],
  exports:[
    NavbarComponent
  ]
})
export class SharedModule { }
