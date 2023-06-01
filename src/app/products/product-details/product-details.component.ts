import { Component } from '@angular/core';
import { ProductsService } from '../products.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent {
  constructor(
    private _products: ProductsService,
    private route: ActivatedRoute
  ) {}

  id = this.route.snapshot.params['id'];
  product:any= {};

  ngOnInit(){
    this.getProductById();
  }

  getProductById() {
    this._products.getProductById(this.id).subscribe((res) => {
      this.product = res;
    });
  }

  addToCart(id:any){


  }

}
