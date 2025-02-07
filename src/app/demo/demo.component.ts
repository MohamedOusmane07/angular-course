import {Component, Input, OnChanges, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrl: './demo.component.css'
})
export class DemoComponent implements OnChanges{

  title : string ='Demo component'
  @Input() inputValueMessage : string ;
  constructor() {
    console.log('Demo component constructor called')
    console.log(this.title);
    console.log(this.inputValueMessage);
  }

  ngOnChanges(changes:SimpleChanges){
    console.log('ngOnChanges hook is called')
    console.log(changes);

  }
}
