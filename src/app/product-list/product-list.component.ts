import { Component } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {

  addToCart:number = 0;
  displayValue:string="";
  product ={
    name : "Iphone 13",
    price: 867 ,
    color : "white",
    discount : 6.8,
    inStock: 5,
    pImage : "/assets/images/iphone13.jpeg"

  }

  getDiscounted(){
    return this.product.price - (this.product.price * this.product.discount / 100)
  }

  decrementCartValue(){
    if(this.addToCart > 0){
      this.addToCart--;
    }

  }

  incrementCartValue(){
    if(this.addToCart < this.product.inStock){
      this.addToCart++;
    }

  }

  addT() {
    console.log("dfslmfj")
  }

  //protected readonly event = event;

  displayText(event:any) {
    console.log(event);
    this.displayValue=event.target.value;

  }

//  protected readonly event = event;
}
