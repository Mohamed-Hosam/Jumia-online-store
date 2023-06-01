import { Component } from '@angular/core';
import { ProductsService } from '../products.service';
import { defineComponents, IgcRatingComponent } from 'igniteui-webcomponents';
import { ActivatedRoute } from '@angular/router';

defineComponents(IgcRatingComponent);
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent {
  productsArr: any = [];
  constructor(
    private _pService: ProductsService,
    private route: ActivatedRoute
  ) {}
  ngOnInit() {
    this.getProducts();
  }

  getProducts() {
    this._pService.getProducts().subscribe((res) => {
      this.productsArr = res;
    });
  }

  reroute(id: number) {
    let currentUrl = this.route.snapshot.url.join('/');
    window.location.href = currentUrl + '/' + id;
  }
}
