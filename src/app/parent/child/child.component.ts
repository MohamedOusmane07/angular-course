import {Component, ContentChild, ElementRef} from '@angular/core';
import {TestComponent} from "../../test/test.component";

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent {

  @ContentChild('para') paragaphEl : ElementRef;
  @ContentChild(TestComponent) testEl:TestComponent;

  StyleParagraph() {
    console.log(this.paragaphEl.nativeElement);
    console.log(this.testEl.name)

  }
}
