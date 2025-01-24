import {Component, ViewChild} from '@angular/core';
import {ProductListComponent} from "./product-list/product-list.component";

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrl: './container.component.css'
})
export class ContainerComponent {

  searchTextFromAppSearch:string='';


  @ViewChild(ProductListComponent) productListComponent:ProductListComponent;

  setSearchText(value:string){
    this.searchTextFromAppSearch=value;
  }
}
