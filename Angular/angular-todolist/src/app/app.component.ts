import { Component } from '@angular/core';

// This is basically a typescript decorator
@Component({
  selector: 'app-root', // It is what will be used in the HTML element.
  templateUrl: './app.component.html', // points to the HTML template
  styleUrls: ['./app.component.css'], // points to the styles
})

// component class
export class AppComponent {
  constructor() {
    console.log('Component Loaded');
  }

  title: string = 'angular-todolist';
}
