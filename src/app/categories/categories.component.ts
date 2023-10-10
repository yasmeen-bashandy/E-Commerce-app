import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/core/services/prouducts.service';


import { Category } from 'src/core/interface/category';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
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
        items: 5
      },

    },
    nav: true
  }
  allCategories:Category[]=[]
  constructor(private _productsService:ProductsService){

  }
  ngOnInit(): void {
    this.getCategories()
  }

  getCategories(){
    this._productsService.getCategories().subscribe({
      next:(res)=>{
        // console.log(res);
        this.allCategories=res.data
        console.log(this.allCategories);
        
      }
    })
  }

}
