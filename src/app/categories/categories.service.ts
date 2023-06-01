import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {
  baseUrl: string = "https://fakestoreapi.com/products/categories";

  constructor(private _http: HttpClient) { }

  getCategories(): Observable<any>{
    return this._http.get<any>(this.baseUrl);
  }
}
