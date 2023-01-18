import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CartService {


  private cart: any[] = [];

  addToCart(product: any) {
  this.cart.push(product);
  }
  
  getCart() {
  return this.cart;
  }
  
  clearCart() {
  this.cart = [];
  return this.cart;
  }
  }