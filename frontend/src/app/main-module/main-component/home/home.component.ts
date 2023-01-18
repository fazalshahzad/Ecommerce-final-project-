// HomeComponent
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductApiService } from 'src/app/shared-service/product-api/product-api.service';
import { CartService } from 'src/app/shared-service/cart-service/cart.service';
import * as AOS from 'aos';
import { RouterModule } from '@angular/router';

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

  // Grid list view 
  viewProduct() {
    this.productView = true;
  }
  viewProduct1() {
    this.productView = false;
  }

  // ReDirect on Single Product Page 
  reDirectSingleProductPage(_id: any) {
    this.Router.navigate(['View-Product', _id]);
  }
  addToCart(product: any) {
    this.cartService.addToCart(product);
    this.Router.navigate(['cart']);
    }
}
