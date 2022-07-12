import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Category } from 'src/app/site-layout/category';
import { Product } from '../product';
import { ProductService } from '../product.service';
import { Router } from "@angular/router";


@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent implements OnInit {
  productID=0;

  categoryList :Category | any

  productDetails:Product|any

  constructor(private activeRoute: ActivatedRoute,private productService:ProductService,private router: Router) { }

  ngOnInit(): void {
    this.activeRoute.params.subscribe(data=>{
     this.productID=data['id'];
     
    })

    this.productService.viewProductById(this.productID).subscribe(productData=>{

      this.productDetails=productData
     
      console.log(this.productDetails);
      
    })


    this.productService.getCategory().subscribe(data=>{
      this.categoryList=data
      // console.log( this.categoryList);
      
    })
  }

  
  updateProduct(form: any){
    console.log(form.productname.value);

    let updateProduct={
     
      categoryId:form.productcategory.value,
      name: form.productname.value,
      price: form.productprice.value,
      description:form.productdescription.value,
      is_avilable: form.product_available.value,
      productImage:"http://localhost:4200/assets/image/frg.jpg",
      rating: form.productrating.value,
      review: form.productreview.value,
    };

    console.log(updateProduct);

    this.productService.updateProduct(this.productID,updateProduct).subscribe(data=>{
      alert("Updated");
      
    })

    this.router.navigate(['product/list-product']);        
  
  }

}
