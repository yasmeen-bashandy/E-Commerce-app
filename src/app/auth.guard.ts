import { CanActivateFn, Router } from '@angular/router';







export const authGuard: CanActivateFn = (route, state) => {
  
  // constructor(private _router:Router){

  // }
  return true;
  
//  if (localStorage.getItem("userToken")!= null) {
//    return true;
//  }else{

//   return false;
//  }
};
