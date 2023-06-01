import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
baseUrl: string = "https://fakestoreapi.com/products";
  constructor(private _http: HttpClient) { }

    getProducts(): Observable<any>{
      return this._http.get<any>(this.baseUrl);
    }

  getProductById(id:number): Observable<any>{
    return this._http.get<any>(this.baseUrl+"/"+id);
  }

  getProductsByCategory(category:string): Observable<any>{
    return this._http.get<any>(this.baseUrl+"/category/"+category);
  }
}
