import { ProductInterface } from './../../../shared-service/productInterface/product';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductApiService } from 'src/app/shared-service/product-api/product-api.service';
import * as AOS from 'aos';
import { CartService } from 'src/app/shared-service/cart-service/cart.service';

import { Cart } from 'src/app/shared-service/Model/cartmodel';
import { CartItem } from 'src/app/shared-service/Model/cartitem';
import { product } from '../../../shared-service/Model/product';




@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  private items: product[] = [];

  public selectedQuantity:Number | any = 0;
  public stockQuantity:any;
  public imageIndex = "ProductImageUrl"
  public url = 'http://localhost:8686/'
  public getProductsId: any;
  public getAllDataWithOwnId: object | ProductInterface | any = {}
  public getAllDatafromProductService: any
  product:any;
 
  cartProducts: any[] = [];
  cart!: Cart;


  constructor(private cartService: CartService,
    private ActivatedRoute: ActivatedRoute,
    private readonly getAllProductFrombackend: ProductApiService,
    private readonly Router:Router,
    private getProductDatafromservice: ProductApiService,
    ) {

    
    

   }
  
  ngOnInit() {
    this.items = this.cartService.getItems();

    this.callingMyActivatedRoute()
    this.getProductService()
    this.getAllProduct()
  }


  public callingMyActivatedRoute() {
    this.getProductsId = this.ActivatedRoute.snapshot.params['Id']
    console.log(this.getProductsId);
  }

  public getProductService() {
    this.getAllProductFrombackend.getProductWithId(this.getProductsId).subscribe((response: any) => {
      this.getAllDataWithOwnId = response.Result
    })
  }
  public getAllProduct() {
    this.getAllProductFrombackend.getProduct().subscribe((response: any) => {
      this.getAllDatafromProductService = response.Result
    })
  }
  


}


  