import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  token:string

  constructor(private _httpClient:HttpClient) { }


  addToCart(){

  }
}
