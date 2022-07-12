import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { from, Observable } from 'rxjs';
import { Category } from '../site-layout/category';
import { Product } from './product'

@Injectable({
  providedIn: 'root'
})

export class ProductService {

  constructor(private httpClient:HttpClient) { }

  addtocart(cartBody: any):Observable<Product>{
    const baseUrl="http://localhost:3000/cart";
    return this.httpClient.post<Product>(baseUrl,cartBody)
    
  }

  
  viewcart():Observable<Product>{
    const baseUrl="http://localhost:3000/cart";
    return this.httpClient.get<Product>(baseUrl)
    
  }



  createProduct(productBody: any):Observable<Product>{
    const baseUrl="http://localhost:3000/product";
    return this.httpClient.post<Product>(baseUrl,productBody)
    
  }

  viewProduct():Observable<Product>{
    const baseUrl="http://localhost:3000/product/";
    return this.httpClient.get<Product>(baseUrl)
    
  }

  viewProductById(productID:any){
    const baseUrl="http://localhost:3000/product/"+productID;
    return this.httpClient.get<Product>(baseUrl,productID)
    
  }


  updateProduct(productID:any,productBody:any):Observable<Product>{
    const baseUrl="http://localhost:3000/product/"+productID;
    return this.httpClient.put<Product>(baseUrl,productBody)
    
  }

  
  deleteProduct(productID:any){
    const baseUrl="http://localhost:3000/product/"+productID;
    return this.httpClient.delete(baseUrl,productID)
    
  }
  
  
  searchCategoryProduct(categoryId:any){
    const baseUrl="http://localhost:3000/product?categoryId="+categoryId;
    return this.httpClient.get(baseUrl,categoryId)
    
  }

  getCategory(){
    const categoryUrl="http://localhost:3000/categories";
    return this.httpClient.get<Category>(categoryUrl)
    
  }

}
