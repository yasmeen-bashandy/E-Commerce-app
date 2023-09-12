import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private _http:HttpClient) {  }

  getUserData(){
    let encodedToken=localStorage.getItem('userToken');
  
   
  }

    register(data:any):Observable<any>{
      return this._http.post('https://ecommerce.routemisr.com/api/v1/auth/signup',data)
    }
    login(data:any):Observable<any>{
      return this._http.post('https://ecommerce.routemisr.com/api/v1/auth/signin',data)
    }





 
}


