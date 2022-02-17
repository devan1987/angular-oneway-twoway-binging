import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;
  className = 'testclass';
  classNameTwo = 'testclasstwo';
  classNameThree = 'testclassthree';
  mytest = ' Start editing to see some magic happen :)';

  print(event: any) {
    console.log(event);
    this.name = event.target.value;
  }
}
