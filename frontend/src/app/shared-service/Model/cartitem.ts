import { product } from "./product";


export class CartItem{
    constructor(public product:product){}
    quantity:number = 1;
    price:number = this.product.price;
    name:string = this.product.name;
    detail:string = this.product.detail;
    size:string = this.product.size;
    imageUrl:string = this.product.imageUrl;
    
  }
  