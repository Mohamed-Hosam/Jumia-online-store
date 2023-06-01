import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from 'src/app/products/products.service';
import { defineComponents, IgcRatingComponent } from 'igniteui-webcomponents';

defineComponents(IgcRatingComponent);
@Component({
  selector: 'app-category-products',
  templateUrl: './category-products.component.html',
  styleUrls: ['./category-products.component.css']
})
export class CategoryProductsComponent {
  constructor(
    private _pService: ProductsService,
    private route: ActivatedRoute
  ) {}
  category = this.route.snapshot.params['category'];
  productsArr:any=[]
  ngOnInit(){
    this.getProductsByCategory();
  }

  getProductsByCategory() {
    this._pService.getProductsByCategory(this.category).subscribe((res) => {
      this.productsArr = res;
    });
  }
}
