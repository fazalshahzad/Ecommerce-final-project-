import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Cart } from '../Model/cartmodel';
import { CartItem } from '../Model/cartitem';
import { product } from '../Model/product';

import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { Observable } from 'rxjs/internal/Observable';





export interface Product {
  id: number;
  name: string;
  price: number;
  imageUrl: string;
  quantity: number;
}



@Injectable({
  providedIn: 'root'
})
export class CartService {



    private items: Product[] = [];
    private totalCost = 0;
  
    constructor() { }
  
    addToCart(item: Product) {
      let existingItem = this.items.find(i => i.id === item.id);
      if (existingItem) {
        existingItem.quantity++;
      } else {
        this.items.push({ ...item, quantity: 1 });
      }
      this.calculateTotalCost();
    }
  
    getItems() {
      return this.items;
    }
  
    getTotalCost() {
      return this.totalCost;
    }
  
    incrementQuantity(item: Product) {
      item.quantity++;
      this.calculateTotalCost();
    }
  
    decrementQuantity(item: Product) {
      item.quantity--;
      if (item.quantity === 0) {
        this.removeItem(item);
      } else {
        this.calculateTotalCost();
      }
    }
  
    removeItem(item: Product) {
      this.items = this.items.filter(i => i !== item);
      this.calculateTotalCost();
    }
  
    calculateTotalCost() {
      this.totalCost = this.items.reduce((acc, item) => acc + (item.price * item.quantity), 0);
    }
  }
  





  