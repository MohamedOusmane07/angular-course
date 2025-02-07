import {
  ChangeDetectionStrategy,
  Component,
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
 // changeDetection: ChangeDetectionStrategy.OnPush
})
export class DemoComponent implements OnChanges, DoCheck{

  title : string ='Demo component'
  @Input() message : string;
  @ViewChild('temp') tempEl : ElementRef;

  constructor() {
    console.log('Demo component constructor called')
    //console.log(this.title);
    //console.log(this.message);
  }

  ngOnChanges(changes:SimpleChanges){
    console.log('ngOnChanges hook is called')
    //console.log(changes);

  }

  /*ngOnInit(){
    console.log('ngOnit hook is called')
    //console.log(this.tempEl.nativeElement.innerHTML);
  }*/

  ngDoCheck(){
    console.log('ngDoCheck is called')
  }
}
