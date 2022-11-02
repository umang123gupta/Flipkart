import { Product } from './../data-type';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  searchproduct:Product[]=[]
  constructor(private activeRoute:ActivatedRoute, private product:ProductService) { }
  ngOnInit(): void {
    let query=this.activeRoute.snapshot.paramMap.get('query');
    console.log(query)
    query && this.product.searchProduct(query).subscribe((result)=>{
      this.searchproduct=result;
    })
  }
}
