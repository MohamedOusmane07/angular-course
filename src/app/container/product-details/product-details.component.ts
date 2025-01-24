import {Component, Input} from '@angular/core';
import {Product} from "../../Models/Product";
import {ProductListComponent} from "../product-list/product-list.component";

@Component({
  selector: 'product-details',
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})
export class ProductDetailsComponent {

  @Input() productListComp:ProductListComponent = undefined;
  product:Product;
  ngOnInit(){
    this.product=this.productListComp.selectedProduct;
  }


}
