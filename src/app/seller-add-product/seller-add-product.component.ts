import { Router } from '@angular/router';
import { Product } from './../data-type';
import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-seller-add-product',
  templateUrl: './seller-add-product.component.html',
  styleUrls: ['./seller-add-product.component.css']
})
export class SellerAddProductComponent implements OnInit {
addProductMessage:string|undefined;
  constructor(private product:ProductService,private router:Router) { }

  ngOnInit(): void {
  }

  submit(data:Product){
    this.product.addProduct(data).subscribe((result)=>{
      console.log(result);
      
      if(result){
        this.addProductMessage="Product is successfully added..!!";
      }
      setTimeout(() => {
        this.addProductMessage=undefined; 
        this.router.navigate(['/seller-home']); 
      }, 2000);
    })
  }

}
