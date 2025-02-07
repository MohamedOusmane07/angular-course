import {Component, ElementRef, QueryList, viewChild, ViewChildren,} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Angular Life Cycle';
  inputVal:string='';

  constructor() {
    console.log('App component constructor called')
  }

  onBtnClick(inputEL: HTMLInputElement) {
    this.inputVal=inputEL.value;

  }
}
