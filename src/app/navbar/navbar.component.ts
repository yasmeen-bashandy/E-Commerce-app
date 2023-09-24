import { TmplAstHoverDeferredTrigger } from '@angular/compiler';
import { Component } from '@angular/core';
import { AuthService } from 'src/core/services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  isLoggedIn:boolean=false

  constructor(private _authService:AuthService){
    // if (this._authService.userData!=null) {
    //   this.isLoggedIn=true
    // }else{
    //   this.isLoggedIn=false
    // }

    this._authService.userData.subscribe((res)=>{
      console.log(res);
      if ( this._authService.userData.getValue()) {
        this.isLoggedIn=true
        
      }else{
        this.isLoggedIn=false
      }
      
    })

  }

  logOut(){
    this._authService.logOut()
    this.isLoggedIn=false
  }

}
