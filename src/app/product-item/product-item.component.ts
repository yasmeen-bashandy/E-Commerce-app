import { Component, Input } from '@angular/core';
import { Product } from 'src/core/interface/product';



@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent {

  @Input() Product:Product={} as Product;

  constructor() {
    
  }

   
  }


