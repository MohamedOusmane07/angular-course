import {
  AfterContentChecked,
  AfterContentInit, AfterViewChecked, AfterViewInit,
  Component, ContentChild,
  DoCheck,
  ElementRef,
  Input,
  OnChanges, OnDestroy,
  OnInit,
  SimpleChanges,
  ViewChild
} from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrl: './demo.component.css',
})
export class DemoComponent implements OnChanges,OnInit,DoCheck,AfterContentInit,AfterContentChecked, AfterViewInit,AfterViewChecked, OnDestroy{

  title : string ='Demo component'
  @Input() message : string;
  @ViewChild('temp') paraTemplate : ElementRef;
  @ContentChild('temp')paraContent : ElementRef;

  constructor() {
    console.log('Demo component constructor called')
    //console.log(this.message)
  }

  ngOnChanges(changes:SimpleChanges){
    console.log('ngOnChanges hook is called')
    //console.log(changes);
  }

  ngOnInit(){
    console.log('ngOnit hook is called')
    //console.log(this.tempEl.nativeElement.innerHTML);
  }

  ngDoCheck(){
    console.log('ngDoCheck is called')
    //console.log('In doCheck ', this.paraContent)
  }



  ngAfterContentInit(){
    console.log('ngAfterContentInit is called')
    //console.log('In ngAfterContentInit ', this.paraContent)

  }

  ngAfterContentChecked(){
    console.log('ngAfterContentChecked is called')
    //console.log('In ngAfterContentChecked ',this.paraTemplate)
  }

  ngAfterViewInit(){
    console.log('ngAfterViewInit hook called')
    //console.log('In ngAfterViewInit ', this.paraTemplate)

  }

  ngAfterViewChecked(){
    console.log('ngAfterViewChecked hook called')
   // console.log(this.paraTemplate.nativeElement.textContent);
  }

  ngOnDestroy(){
    console.log('ngOnDestroy hook called');
  }
}
