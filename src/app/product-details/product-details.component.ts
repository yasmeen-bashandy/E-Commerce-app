import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { Product } from 'src/core/interface/product';
import { ProductsService } from 'src/core/services/prouducts.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent {
  productId:string='';
  productDetails:Product={} as Product;
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
     
    },
    nav: true
  }

    constructor(private _activatedRoute:ActivatedRoute,private _productsService:ProductsService){
      this._activatedRoute.paramMap.subscribe((res:any)=>{
        console.log(res.params.id);
        this.productId=res.params.id
        
      })
      this._productsService.getProductById(this.productId).subscribe({
        next:(res)=>{
          console.log(res.data);
          this.productDetails=res.data
          
        }


      })

    }

}