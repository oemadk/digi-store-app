import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private httpClient: HttpClient) { }

  getProductsList() {
    return this.httpClient
      .get<any[]>(`https://fakestoreapi.com/products?limit=10`);
  }

  addProduct(product: any) {
    return this.httpClient
    .post<any[]>(`https://fakestoreapi.com/products`, product);
  }

  getProductDetails(id: any) {
    return this.httpClient
    .get<any[]>(`https://fakestoreapi.com/products/${id}`);
  }

}
