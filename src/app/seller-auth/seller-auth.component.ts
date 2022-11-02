import { signUp } from './../data-type';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SellerService } from '../services/seller.service';

@Component({
  selector: 'app-seller-auth',
  templateUrl: './seller-auth.component.html',
  styleUrls: ['./seller-auth.component.css']
})
export class SellerAuthComponent implements OnInit {

  showLogin=false;
  authError:string='';
  constructor(private seller:SellerService,private router:Router) { }

  ngOnInit(): void {
    this.seller.reloadSeller();
  }
  signUp(data:signUp){
    // console.log(data);
    this.seller.userSignUp(data);
  }
  Login(data:signUp){
    this.authError="";
    // console.log(data);
    this.seller.userLogin(data);
    this.seller.isLoginError.subscribe((isError)=>{
      if (isError){
        this.authError="Email or Password is not Correct";
      }
    })
  }


  openLogin(){
    this.showLogin=true;
  }
  openSignUp(){
    this.showLogin=false;
  }

}
