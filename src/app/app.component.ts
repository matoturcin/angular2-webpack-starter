import { Component } from '@angular/core';
import { TestComponent } from './test.component';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  directives: [TestComponent]
})
export class AppComponent { }