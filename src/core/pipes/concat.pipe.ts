import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'concat'
})
export class ConcatPipe implements PipeTransform {

 
  transform(value:number,keyWord:string ): string {
    return keyWord + value ;
  }

}
