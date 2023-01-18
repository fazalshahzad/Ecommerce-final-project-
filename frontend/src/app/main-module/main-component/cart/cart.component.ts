import { ProductInterface } from './../../../shared-service/productInterface/product';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductApiService } from 'src/app/shared-service/product-api/product-api.service';
import * as AOS from 'aos';
import { CartService } from 'src/app/shared-service/cart-service/cart.service';

import { Cart } from 'src/app/shared-service/Model/cartmodel';
import { CartItem } from 'src/app/shared-service/Model/cartitem';



@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
 
  cartProducts: any[] = [];
  cart!: Cart;


  constructor(private cartService: CartService) {

    this.cartService.getCartObservable().subscribe((cart) => {
      this.cart = cart;
    })

   }
  
  ngOnInit() {
  }

  
  removeFromCart(cartItem:CartItem){
    this.cartService.removeFromCart(cartItem.product.id);
  }

  changeQuantity(cartItem:CartItem,quantityInString:string){
    const quantity = parseInt(quantityInString);
    this.cartService.changeQuantity(cartItem.product.id, quantity);
  }





  }