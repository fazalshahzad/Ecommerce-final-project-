import { ProductInterface } from './../../../shared-service/productInterface/product';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductApiService } from 'src/app/shared-service/product-api/product-api.service';
import * as AOS from 'aos';
import { CartService } from 'src/app/shared-service/cart-service/cart.service';



@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
 
  cartProducts: any[] = [];

  constructor(private cartService: CartService) { }
  
  ngOnInit() {
  this.cartProducts = this.cartService.getCart();
  }
  }