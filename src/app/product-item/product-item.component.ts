
import { Component, Input } from '@angular/core';
import { Product } from 'src/core/interface/product';
import { CartService } from '../cart/cart.service';



@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent {

  @Input() Product:Product={} as Product;

  constructor(private _cartService:CartService) {
    
  }

  addProduct(id:string){
    this._cartService.addToCart(id).subscribe({
      next:(res)=>{console.log(res)},
      error:(err)=>{console.log(err);
      }
  
      }
   )}

  }


