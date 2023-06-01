import { Component } from '@angular/core';

export interface Cart {
  image: string;
  title: string;
  price: number;
  quantity: number;
}

const ELEMENT_DATA: Cart[] = [
  {
    image:"https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
    title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
    price: 109.95,
    quantity: 2
  }
];


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  displayedColumns: string[] = ['Image', 'Title', 'Price', 'Quantity'];

  dataSource = ELEMENT_DATA;

}
