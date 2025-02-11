import {
  AfterContentChecked,
  AfterContentInit,
  ChangeDetectionStrategy,
  Component, ContentChild,
  DoCheck,
  ElementRef,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
  ViewChild
} from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrl: './demo.component.css',
})
export class DemoComponent implements OnChanges,OnInit,AfterContentInit,AfterContentChecked{

  title : string ='Demo component'
  @Input() message : string;
  @ViewChild('temp') tempEl : ElementRef;
  @ContentChild('temp')paraContent : ElementRef;

  constructor() {
    console.log('Demo component constructor called')
    console.log(this.message)
  }

  ngOnChanges(changes:SimpleChanges){
    console.log('ngOnChanges hook is called')
    //console.log(changes);
  }

  ngOnInit(){
    console.log('ngOnit hook is called')
    //console.log(this.tempEl.nativeElement.innerHTML);
  }

  /*ngDoCheck(){
    console.log('ngDoCheck is called')
    console.log('In doCheck ', this.paraContent)
  }

   */

  ngAfterContentInit(){
    console.log('ngAfterContentInit is called')
    //console.log('In ngAfterContentInit ', this.paraContent)

  }

  ngAfterContentChecked(){
    console.log('ngAfterContentChecked is called')
    //console.log('In AfterContentChecked', this.paraContent)
  }
}
