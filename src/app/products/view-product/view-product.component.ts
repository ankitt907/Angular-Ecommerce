import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AddCart } from '../add-cart';
import { Product } from '../product';

import { ProductService } from '../product.service';
import { Router } from "@angular/router";

@Component({
  selector: 'app-view-product',
  templateUrl: './view-product.component.html',
  styleUrls: ['./view-product.component.css']
})
export class ViewProductComponent implements OnInit {
productID=0;
productData:Product | any
cartItem:AddCart |any

  constructor(private activeRoute: ActivatedRoute,private productService:ProductService,private router: Router) { }

  ngOnInit(): void {
    this.activeRoute.params.subscribe(data=>{
    
      this.productID=data['id'];


     this.productService.viewProductById(this.productID).subscribe(viewData=>{
      this.productData=viewData    
  
    })

    })
  }


  addtocart(quantity: any){
    
    let newProduct={
      id:5,
      productId:this.productID,
      productName:this.productData.name,
      quantity:quantity.value

    }
    this.productService.addtocart(newProduct).subscribe(data=>{
      console.log(data);
      
    })

    this.router.navigate(['product/cart']);    


  }

}
