import { Component, OnInit } from '@angular/core';
import { AddCart } from 'src/app/products/add-cart';
import { ProductService } from 'src/app/products/product.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
 
  cartdata:AddCart |any
  constructor(private productService:ProductService) { }

  ngOnInit(): void {
    this.productService.viewcart().subscribe(data=>{
      this.cartdata=data
    })
  }

}
