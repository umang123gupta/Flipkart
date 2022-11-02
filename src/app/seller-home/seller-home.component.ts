import { Product } from './../data-type';
import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import{faTrash,faEdit} from '@fortawesome/free-solid-svg-icons'
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-seller-home',
  templateUrl: './seller-home.component.html',
  styleUrls: ['./seller-home.component.css']
})
export class SellerHomeComponent implements OnInit {
  icon=faTrash;
  editIcon=faEdit;
  deleteMesage: string | undefined;
  productList: undefined | Product[];
  listSubscription!:Subscription;
  
  constructor(private product: ProductService) { }

  ngOnInit(): void {
    const polling=interval(1000);

    this.listSubscription=polling.subscribe((res)=>{
      this.list();
      console.log("Polling Start : "+res);
      if(res>2){
        console.log("Polling end");
        this.listSubscription.unsubscribe();
      }
    })

    // this.list();

  }
  deleteProduct(id: number) {
    this.product.deleteProduct(id).subscribe((result) => {
      if (result) {
        this.deleteMesage = "Product is deleted..!!"
        this.list();
      }
    })
    setTimeout(() => {
      this.deleteMesage = undefined;
    }, 2000);
  }

  list() {
    this.product.productList().subscribe((result) => {
      // console.log(result);
      this.productList = result;
    })
  }
}
