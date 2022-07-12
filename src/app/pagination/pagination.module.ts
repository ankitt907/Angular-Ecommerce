import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PaginationRoutingModule } from './pagination-routing.module';
import { PaginationComponent } from './pagination.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { CustompipePipe } from './custompipe.pipe';


@NgModule({
  declarations: [
    PaginationComponent,
    CustompipePipe
  ],
  imports: [
    CommonModule,
    PaginationRoutingModule,
    NgxPaginationModule
  ]
})
export class PaginationModule { }
