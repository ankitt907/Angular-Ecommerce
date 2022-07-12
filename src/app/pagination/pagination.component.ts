import { Component, OnInit } from '@angular/core';
import { Pagination } from './pagination';
import { PaginationService } from './pagination.service';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit {

  employeeList:Pagination | any;
  
  result:string='';
  collection=[];
  p=1;

  constructor(private employee:PaginationService) { }

  ngOnInit(): void {

    this.employee.viewEmployee().subscribe((data:any)=>{
        this.employeeList=data
        console.log(this.employeeList);
        
    })

  }

}
