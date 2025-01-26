import {Component, ContentChild, ContentChildren, ElementRef, QueryList} from '@angular/core';
import {TestComponent} from "../../test/test.component";

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent {

  @ContentChild('para' ) paragaphEl : ElementRef;
  @ContentChild(TestComponent) testEl:TestComponent;

  @ContentChildren('para') paraEls:QueryList<ElementRef>;

  @ContentChildren(TestComponent) testEls : QueryList<TestComponent>;

  StyleParagraph() {
    //console.log(this.paragaphEl.nativeElement);
    //console.log(this.testEl.name)

    this.paraEls.forEach((el:ElementRef)=>{
      console.log(el.nativeElement);
    })
    this.testEls.forEach((test:TestComponent)=>{
      console.log(test);
    })

  }
}
