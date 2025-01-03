import { Component } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {
  searchText: string="Mens wears";

  updateText(event: any) {
    this.searchText=event.target.value

  }
}
