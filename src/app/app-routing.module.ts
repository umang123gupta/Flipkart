import { ProductDetailsComponent } from './product-details/product-details.component';
import { SellerUpdateProductComponent } from './seller-update-product/seller-update-product.component';
import { SellerAddProductComponent } from './seller-add-product/seller-add-product.component';
import { SellerHomeComponent } from './seller-home/seller-home.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SellerAuthComponent } from './seller-auth/seller-auth.component';
import { AuthGuard } from './auth.guard';
import { SearchComponent } from './search/search.component';

const routes: Routes = [
  {path:'',redirectTo:"home",pathMatch:"full"},
  {path:'home',component:HomeComponent},
  {path:'seller-auth',component:SellerAuthComponent},
  {path:'seller-home',component:SellerHomeComponent,canActivate:[AuthGuard]},
  {path:'seller-add-product',component:SellerAddProductComponent,canActivate:[AuthGuard]},
  {path:'seller-update-product/:id',component:SellerUpdateProductComponent,canActivate:[AuthGuard]},
  {path:'search/:query',component:SearchComponent},
  {path:'details/:productId',component:ProductDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
