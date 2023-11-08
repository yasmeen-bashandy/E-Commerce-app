import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  token:string | null

  constructor(private _httpClient:HttpClient) {
    console.log(localStorage.getItem("userToken"))
    
    this.token=localStorage.getItem("userToken")
  }

  addToCart(x:string):Observable<any>{
    return this._httpClient.post('https://ecommerce.routemisr.com/api/v1/cart',
    {productId:x},
    {
      headers:{
        token:`${this.token}`
      }
    })
  }
  getCart():Observable<any>{
    return this._httpClient.get('https://ecommerce.routemisr.com/api/v1/cart',

    {
      headers:{
        token:`${this.token}`
      }
    })
  }
  updateCart(productId:string, x:number):Observable<any>{
    return this._httpClient.put(`hhttps://ecommerce.routemisr.com/api/v1/cart/${{productId}}`,
    {count:x},

    {
      headers:{
        token:`${this.token}`
      }
    })
  }
}


