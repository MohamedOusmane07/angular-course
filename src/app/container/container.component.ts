import { Component } from '@angular/core';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrl: './container.component.css'
})
export class ContainerComponent {

  searchTextFromAppSearch:string='';

  setSearchText(value:string){
    this.searchTextFromAppSearch=value;
  }
}
