import { Component, OnInit } from '@angular/core';
import { Product } from 'src/core/interface/product';
import { ProductsService } from 'src/core/services/prouducts.service';


@Component({
  selector: 'app-featured-products',
  templateUrl: './featured-products.component.html',
  styleUrls: ['./featured-products.component.css']
})
export class FeaturedProductsComponent implements OnInit {
  allProduct:Product[]=[];
  searchTerm:string=''

  constructor(private _productsService:ProductsService){

  }

  ngOnInit(): void {
    this.getAllProducts()
  }

  getAllProducts(){
    this._productsService.getProducts().subscribe({
      next:(res)=>{
        console.log(res);
        this.allProduct=res.data;
        
      }
    })
  }

}

