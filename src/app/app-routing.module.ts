import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListOrderComponent } from './order/list-order/list-order.component';
import { ViewProductComponent } from './products/view-product/view-product.component';
import {FileuploadComponentComponent} from './fileupload/fileupload-component/fileupload-component.component'

const routes: Routes = [
   { path: 'product', loadChildren: () => import('./products/products.module').then(m => m.ProductsModule) },
    {path:'order', component:ListOrderComponent},
    {path:'file', component:FileuploadComponentComponent},
   { path: 'crud', loadChildren: () => import('./crud/crud.module').then(m => m.CrudModule) },
   { path: 'pagination', loadChildren: () => import('./pagination/pagination.module').then(m => m.PaginationModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
