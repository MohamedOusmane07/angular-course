import { Component } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {
  searchText: string="";

  updateText(event: any) {
    this.searchText=event.target.value

  }
  displaySearchText(){
    if (this.searchText!=''){
      return true;
    }
    else return false;
  }
}
