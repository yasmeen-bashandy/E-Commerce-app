import { Component } from '@angular/core';
import { FormControl, FormGroup ,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/core/services/auth.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {

  isLoading:boolean=false;
  apiError:string='';
  isNotValidForm:boolean=false


  constructor(private _authService:AuthService ,private _router:Router){
    
  }



  registerForm:FormGroup=new FormGroup({
    name:new FormControl('',[Validators.required,Validators.minLength(3),Validators.maxLength(15)]),
    email:new FormControl('',[Validators.required,Validators.email]),
    password:new FormControl('',[Validators.required,Validators.pattern(/^[A-Z][a-z0-9]{3,8}/)]),
    rePassword:new FormControl('',[Validators.required,Validators.pattern(/^[A-Z][a-z0-9]{3,8}/)]),
    phone:new FormControl('',[Validators.required,Validators.minLength(10),Validators.maxLength(11)])
  })


  register(form:FormGroup){
    console.log("Hiii",form);

    if(form.valid){
      this.isLoading=true
      this._authService.register(form.value).subscribe({
        next:(res:any)=>{
          console.log(res);
          this.isLoading=false;
          this._router.navigate(['/login'])
          
        },
        error:(err)=>{
          console.log(err.error.message);
          this.apiError=err.error.message
        }
        
      })

    }else{
    this.isNotValidForm=true;
    }
    
  }

}
