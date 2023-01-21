// HomeComponent
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductApiService } from 'src/app/shared-service/product-api/product-api.service';
import { CartService } from 'src/app/shared-service/cart-service/cart.service';
import * as AOS from 'aos';
import { RouterModule } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { product } from 'src/app/shared-service/Model/product';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  selectSize = ["S", "M", "L", "X-L", "XX-L"];
  newSizeArray: any;
  p: number = 1
  pageItem: number = 8
  totalProduct: any;
  selectedProduct: any;
  product:any;

  productView: boolean = true;
  ProductArray: any = [];
  Url = 'http://localhost:8686/';

  constructor(
    private ActivatedRoute:ActivatedRoute,
    
    private getProductDatafromservice: ProductApiService,
    private Router: Router,
    private cartService: CartService,
    private RouterModule:RouterModule
  ) { }

  ngOnInit(): void {
    AOS.init();
    this.getProductDatafromservice.getProduct().subscribe((res: any) => {
      this.ProductArray = res.Result;
      this.totalProduct = this.ProductArray.length;
    });

  
  }

  

  // ReDirect on Single Product Page 
  reDirectSingleProductPage(_id: any) {
    this.Router.navigate(['View-Product', _id]);
  }

  
  addToCart(){
    this.cartService.addToCart(this.product);
    this.Router.navigateByUrl('/cart');
  }



}
