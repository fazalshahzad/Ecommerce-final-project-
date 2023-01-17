import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CartService {



  
  private cartItems: any[] = [];
  cartItemsFromBackend: any[] = [];

  constructor(private http: HttpClient) { }

  addToCart(product: any) {
    this.cartItems.push(product);
  }


  getCartItems(): any[] {
    return this.cartItems;
  }

  // Method to get cart items from backend
  getCartItemsFromBackend() {
    return this.http.get('api/cart');
  }



}
