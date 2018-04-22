import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = 'MP1';
  events = [
    {id: 1, name: 'Meal 1', date: new Date('22 April 2018')},
    {id: 2, name: 'Meal 2', date: new Date()},
  ];
}
