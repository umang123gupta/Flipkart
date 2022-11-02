import { Router } from '@angular/router';
import { signUp, Login } from './../data-type';
import { EventEmitter, Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SellerService {
isSellerLoggedIn= new BehaviorSubject<boolean>(false);
isLoginError=new EventEmitter<boolean>(false);

  constructor(private http:HttpClient, private router:Router) { }

  userSignUp(data:signUp){
    return this.http.post('http://localhost:3000/seller',data,{observe:'response'})
    .subscribe((res)=>{
      this.isSellerLoggedIn.next(true);

      localStorage.setItem('seller',JSON.stringify(res.body));
      this.router.navigate(['seller-home']);
    });
  }

  reloadSeller(){
    if(localStorage.getItem('seller')){
      this.isSellerLoggedIn.next(true)
      this.router.navigate(['seller-home']);
    }
  }

  userLogin(data:Login){
    console.log(data);
    this.http.get(`http://localhost:3000/seller?email=${data.email}&password=${data.password}`,
    {observe:'response'}).
    subscribe((result:any)=>{
      console.warn(result);
      if(result && result.body && result.body.length){
        console.log("user Logged in");
        localStorage.setItem('seller',JSON.stringify(result.body));
      this.router.navigate(['seller-home']);
      }else{
        console.log("Login Failed");
        this.isLoginError.emit(true);
      }
    })
  }
}
