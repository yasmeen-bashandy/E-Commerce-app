import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { CartComponent } from './cart/cart.component';
import { ProductsComponent } from './products/products.component';
import { BrandComponent } from './brand/brand.component';
import { CategoriesComponent } from './categories/categories.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AuthGuard } from './auth.guard';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { SettingModule } from './setting/setting.module';

const routes: Routes = [
  {path:"",redirectTo:"home",pathMatch:"full"},
  {path:"home",canActivate:[AuthGuard],component:HomeComponent},
  {path:"about",canActivate:[AuthGuard],component:AboutComponent},
  {path:"products",canActivate:[AuthGuard],component:ProductsComponent},
  {path:"brands",canActivate:[AuthGuard],component:BrandComponent},
  {path:"categories",canActivate:[AuthGuard],component:CategoriesComponent},
  {path:"productDetails/:id",canActivate:[AuthGuard],component:ProductDetailsComponent},


  {path:"signup",component:SignUpComponent},
  {path:"login",component:SignInComponent},
  {path:"setting",loadChildren:()=>import('./setting/setting.module').then(m=>m.SettingModule)},
  {path:"cart",loadChildren:()=>import('./cart/cart.module').then(m=>m.CartModule)},


  {path:"**",component:NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
