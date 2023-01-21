import { ProductInterface } from './../../../shared-service/productInterface/product';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductApiService } from 'src/app/shared-service/product-api/product-api.service';
import * as AOS from 'aos';
import { CartService } from 'src/app/shared-service/cart-service/cart.service';
import { Product } from 'src/app/shared-service/cart-service/cart.service';

import { Cart } from 'src/app/shared-service/Model/cartmodel';
import { CartItem } from 'src/app/shared-service/Model/cartitem';



@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
 
  items: Product[] = [];
  totalCost:any;

  constructor(private cartService: CartService) { }

  ngOnInit() {
    this.items = this.cartService.getItems();
    this.totalCost = this.cartService.getTotalCost();
  }

  incrementQuantity(item: Product) {
    this.cartService.incrementQuantity(item);
    this.totalCost = this.cartService.getTotalCost();
  }

  decrementQuantity(item: Product) {
    this.cartService.decrementQuantity(item);
    this.totalCost = this.cartService.getTotalCost();
  }

  removeItem(item:Product) {
    this.cartService.removeItem(item);
    this.totalCost = this.cartService.getTotalCost();
  }

  checkout() {
    // code to proceed with checkout
  }
}