import { ProductInterface } from './../../../shared-service/productInterface/product';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductApiService } from 'src/app/shared-service/product-api/product-api.service';

import { CartService } from 'src/app/shared-service/cart-service/cart.service';
import { product } from 'src/app/shared-service/Model/product';

@Component({
  selector: 'app-view-product',
  templateUrl: './view-product.component.html',
  styleUrls: ['./view-product.component.css']
})
export class ViewProductComponent implements OnInit {
  public selectedQuantity:Number | any = 0;
  public stockQuantity:any;
  public imageIndex = "ProductImageUrl"
  public url = 'http://localhost:8686/'
  public getProductsId: any;
  public getAllDataWithOwnId: object | ProductInterface | any = {}
  public getAllDatafromProductService: any
  product:any;

  constructor(private ActivatedRoute: ActivatedRoute,
    private readonly getAllProductFrombackend: ProductApiService,
    private readonly Router:Router,
    private getProductDatafromservice: ProductApiService,
    private cartService: CartService,



    ) { }

  ngOnInit(): void {
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

  public reDirectToCartPage(_id: any) {
    this.Router.navigate(['cart',_id]);  }

  public incrementQuantity() {
    if (this.selectedQuantity < this.stockQuantity) {

      this.selectedQuantity == this.stockQuantity;
    }
      return this.selectedQuantity++;

  }


public decrementQuantity() {
  if (this.selectedQuantity > 0) {

  }
  return this.selectedQuantity--;
  }


  addToCart(){
    this.cartService.addToCart(this.product);
    this.Router.navigateByUrl('/cart');
  }


}
