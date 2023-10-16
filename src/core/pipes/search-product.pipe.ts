import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../interface/product';

@Pipe({
  name: 'searchProduct'
})
export class SearchProductPipe implements PipeTransform {

  transform(value: Product[], term:string): Product[] {
    return value.filter((product)=>product.title.toLowerCase().includes(term.toLowerCase()))
  }

}
