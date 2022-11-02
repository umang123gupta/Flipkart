import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../data-type';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-seller-update-product',
  templateUrl: './seller-update-product.component.html',
  styleUrls: ['./seller-update-product.component.css']
})
export class SellerUpdateProductComponent implements OnInit {
  updateMessage:undefined|string
  productData:undefined|Product;
  constructor(private route:ActivatedRoute,private product:ProductService,private router:Router) { }

  ngOnInit(): void {
    let productId=this.route.snapshot.paramMap.get('id')
    productId && this.product.getProduct(productId).subscribe((result)=>{
      // console.log(result);
      this.productData=result;
    })
  }
  submit(data:Product){
    if(this.productData){
      data.id=this.productData.id
    }
    this.product.updateProduct(data).subscribe((result)=>{
      if(result){
        this.updateMessage="Product updated Successfully..!!"
      }
    })
    setTimeout(() => {
      this.updateMessage=undefined;
      this.router.navigate(['/seller-home']);
    }, 2000);
  }

}
