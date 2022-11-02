import { Product } from './../data-type';

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http : HttpClient) { }
  addProduct(data:Product){
   return this.http.post('http://localhost:3000/products',data)
  }
  productList(){
    return this.http.get<Product[]>('http://localhost:3000/products');
  }
  deleteProduct(id:number){
   return this.http.delete(`http://localhost:3000/products/${id}`);
  }
  getProduct(id:string){
    return this.http.get<Product>(`http://localhost:3000/products/${id}`);
  }
  updateProduct(product:Product){
    // console.log(product);
    return this.http.put<Product>(`http://localhost:3000/products/${product.id}`,product);
  }
  popularProducts(){
    return this.http.get<Product[]>('http://localhost:3000/products?_limit=3');
  }
  trendyProducts(){
    return this.http.get<Product[]>('http://localhost:3000/products?_limit=10');
  }
  searchProduct(search:string){
    return this.http.get<Product[]>(`http://localhost:3000/products?q=${search}`);
  }
}
