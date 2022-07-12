import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../product.service';
import { Router } from "@angular/router";
@Component({
  selector: 'app-delete-product',
  templateUrl: './delete-product.component.html',
  styleUrls: ['./delete-product.component.css']
})
export class DeleteProductComponent implements OnInit {
  productID=0;
 
  constructor(private activeRoute: ActivatedRoute,private productService:ProductService,private router: Router) { }

  ngOnInit(): void {
    if(confirm("Are you sure to delete")) {
    
    this.activeRoute.params.subscribe(data=>{
     this.productID=data['id'];

     this.productService.deleteProduct(this.productID).subscribe(data=>{
      
    })

    this.router.navigate(['product/list-product']);    


    })
  }
  }

}
