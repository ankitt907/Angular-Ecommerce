import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProductComponent } from './add-product/add-product.component';
import { DeleteProductComponent } from './delete-product/delete-product.component';
import { ProductsComponent } from './products.component';
import { UpdateProductComponent } from './update-product/update-product.component';
import { ViewAllProductComponent } from './view-all-product/view-all-product.component';
import { ViewCartComponent } from './view-cart/view-cart.component';
import { ViewProductByCategoryComponent } from './view-product-by-category/view-product-by-category.component';
import { ViewProductComponent } from './view-product/view-product.component';

const routes: Routes = [
      { path: '', component: ProductsComponent },
      { path: '', component: ProductsComponent },
      { path: 'view-product/:id', component: ViewProductComponent },
      { path: 'list-product', component: ViewAllProductComponent},
      { path: 'add-product', component: AddProductComponent },
      { path: 'category/:id', component: ViewProductByCategoryComponent },
      { path: 'update-product/:id', component: UpdateProductComponent },
      { path: 'delete-product/:id', component: DeleteProductComponent },
      { path: 'cart', component: ViewCartComponent },
      { path: '', component: ProductsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
