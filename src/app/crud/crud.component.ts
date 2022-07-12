import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Product } from '../products/product';
import { ProductService } from '../products/product.service';
import { Crud } from './crud';
import { CrudService } from './crud.service';
import { NgxPaginationModule } from 'ngx-pagination';
@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.css']
})
export class CrudComponent implements OnInit {
  
  studentlist:Crud|any;

  formValue:FormGroup | undefined;

  crud:Crud | any;

  studentByID:Crud | any;

  p:number=1;

  key:string='id'
  
  reverse:boolean=false;

  sort(key:any){ 
    this.key=key;
    this.reverse=!this.reverse;
  }

  constructor(private formbuilder:FormBuilder,private studentservice:CrudService, private productService:ProductService ,private router:Router) { }

  ngOnInit(): void {
    this.studentservice.viewdata().subscribe(data=>{
    
      this.studentlist=data;
      
    })
    

  }

  search(searchitem:any){

    let searchvalue=searchitem.value;
   
    

   if(searchitem==''){
    this.ngOnInit()
   }else{

    this.studentlist=this.studentlist.filter((res: any)=>{
        
      return      res['name'].toLocaleLowerCase().match(searchvalue.toLocaleLowerCase())
      
    })

   }
    

  }

  addstudent(formData:any){
    let studentDetails={
      id: Math.floor((Math.random() * 100) + 1),
      name: formData.name.value,
      email: formData.email.value,
      mobile: formData.mobile.value,
      fees: formData.fees.value,
    }

    console.log(Math.floor((Math.random() * 100) + 1));
    this.studentservice.adddata(studentDetails).subscribe(data=>{
     alert("Inserted");    
    })

    this.router.navigate(['/crud']);
    console.log(studentDetails);
    this.displayStyle = "none";    
    
  }

  updatestudent(formData:any){

    let studentID=this.studentByID['id']
    
    let studentDetails={
      name: formData.name.value,
      email: formData.email.value,
      mobile: formData.mobile.value,
      fees: formData.fees.value,
    }

    this.studentservice.updatedata(studentID,studentDetails).subscribe(data=>{
      this.studentservice.viewdata().subscribe(data=>{
    
        this.studentlist=data;
        
        this.displayStyle = "none";

        alert("Updated");  
      })

    })
      
  }


  displayStyle = "none";

  openPopup() {
    this.displayStyle = "block";
    this.studentByID='';
  }

  closePopup() {
    this.displayStyle = "none";
   
  }

  onedit(id:any){
    this.studentservice.viewdatabyID(id).subscribe(data=>{
      this.studentByID=data;

      console.log(this.studentByID);

      this.displayStyle = "block";
      
    })
  }
  ondelete(id:any){
    if(confirm("Are you sure to delete "+id)) {
        this.studentservice.deletedata(id).subscribe(data=>{
          alert("Deleted");   

          this.studentservice.viewdata().subscribe(data=>{
    
            this.studentlist=data;
            
          })

          this.router.navigate(['/crud']);

        })
    };
  }

}
