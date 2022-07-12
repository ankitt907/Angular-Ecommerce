import { Component, OnInit,NgModule } from '@angular/core';
import { ProductService } from '../product.service';
import { FormsModule, ReactiveFormsModule , FormGroup} from '@angular/forms';
import { Category } from 'src/app/site-layout/category';
import { Router } from "@angular/router";

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  categoryList: Category | any;
  

  constructor(private productService:ProductService,private router: Router) { }

  ngOnInit(): void {
    this.productService.getCategory().subscribe(data=>{
      this.categoryList=data
      // console.log( this.categoryList);
      
    })
  }

  addNewProduct(form: any){
    console.log(form.productname.value);

    let newProduct={
      id:Math.floor((Math.random() * 100) + 1) ,
      categoryId:form.productcategory.value,
      name: form.productname.value,
      price: form.productprice.value,
      description:form.productdescription.value,
      productImage:"http://localhost:4200/assets/image/frg.jpg",
      is_avilable: 1,
      rating: form.productrating.value,
      review: form.productreview.value,
      vendor_name: '',
      warrenty: ''
    };


    this.productService.createProduct(newProduct).subscribe(data=>{
      alert("Inserted")      
    })

    this.router.navigate(['product/list-product']);    
  
  }

}
