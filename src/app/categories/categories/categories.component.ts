import { Component } from '@angular/core';
import { CategoriesService } from '../categories.service';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent {
  constructor(
    private _cService: CategoriesService, private route: ActivatedRoute, public router: Router){}
  ngOnInit() {
    this.getCategories();
  }
  categoriesArr:any =[];
  getCategories() {
    this._cService.getCategories().subscribe((res) => {
      this.categoriesArr = res;
    });
  }

  reroute(category: number) {
    this.router.navigate(['/products/category/'+this.categoriesArr[category]]);
  }
}
