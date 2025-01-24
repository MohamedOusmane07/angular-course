import {Component, ElementRef, QueryList, viewChild, ViewChildren,} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-ekart';
  fullName:string='';
  @ViewChildren('inputEl')
  inputElList:QueryList<ElementRef>;

  show(){
    let name = ''
    this.inputElList.forEach((el)=>{
      console.log(el.nativeElement.value)
      name +=el.nativeElement.value + ' '
    })
    this.fullName=name.trim();
  }
}
