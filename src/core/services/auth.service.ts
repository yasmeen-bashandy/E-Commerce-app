import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import jwtDecode from 'jwt-decode';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  //#BehaviorSubject >> ashan 2ader a3ml 3la var nafso subscribe
  userData:BehaviorSubject<any>=new BehaviorSubject('')


  constructor(private _http:HttpClient,private _router:Router) { 
    if (localStorage.getItem("userToken")) {
      this.getUserData()
      
    }
   }

  getUserData(){
    let encodedToken=JSON.stringify(localStorage.getItem('userToken'));
    let encoded=jwtDecode(encodedToken)

    console.log(encoded);

    this.userData.next(encoded)
    
  
   
  }

    register(data:any):Observable<any>{
      return this._http.post('https://ecommerce.routemisr.com/api/v1/auth/signup',data)
    }
    login(data:any):Observable<any>{
      return this._http.post('https://ecommerce.routemisr.com/api/v1/auth/signin',data)
    }


    logOut(){
      localStorage.removeItem("userToken")
      this._router.navigate(['/login'])

    }

    navHome(){
      if (localStorage.getItem("userToken")!=null) {
        this._router.navigate(['/home'])
        
      }
    }



 
}


