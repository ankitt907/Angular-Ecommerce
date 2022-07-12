import { Component, OnInit } from '@angular/core';
import { Product } from './product';
import { ProductService } from './product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  productList:Product | any
 
  constructor(private productService:ProductService) { }

  ngOnInit(): void {
    this.productService.viewProduct().subscribe(data=>{
      this.productList=data; 
      console.log(this.productList);
      
    })
  }

}
