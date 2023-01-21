import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Cart } from '../Model/cartmodel';
import { CartItem } from '../Model/cartitem';
import { product } from '../Model/product';

import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { Observable } from 'rxjs/internal/Observable';
@Injectable({
  providedIn: 'root'
})
export class CartService {
  private items: product[] = [];

  addToCart(product: product) {
    this.items.push(product);
  }

  getItems() {
    return this.items;
  }

  clearCart() {
    this.items = [];
    return this.items;
  }

  public get cartItems(): product[] {
    return this.items;
  }
}