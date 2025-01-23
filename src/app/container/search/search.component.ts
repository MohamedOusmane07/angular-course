import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})

export class SearchComponent {
  searchText: string="";

  // create Event
  @Output()
  searchTextChanged:EventEmitter<string> = new EventEmitter<string>();

  onSearchTextChanged(){
    this.searchTextChanged.emit(this.searchText);
  }











}








































/*

updateText(event: any) {
  this.searchText=event.target.value

}

displaySearchText(){
  if (this.searchText!=''){
    return true;
  }
  else return false;
}*/
