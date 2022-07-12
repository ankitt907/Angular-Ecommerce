import { Component, OnInit } from '@angular/core';
import { AddCart } from '../add-cart';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-view-cart',
  templateUrl: './view-cart.component.html',
  styleUrls: ['./view-cart.component.css']
})
export class ViewCartComponent implements OnInit {

  cart:AddCart | any;

  constructor(private productservice:ProductService) { }

  ngOnInit(): void {

    this.productservice.viewcart().subscribe(data=>{
      this.cart=data
      console.log("Vie Cart Item");
      
      console.log(this.cart);
      
    })

  }

}
