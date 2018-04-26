import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = 'MP1';
  events = [
    {id: 1, name: 'Meal 1', date: new Date('1 April 2018')},
    {id: 2, name: 'Meal 2', date: new Date('1 April 2018 13:00')},
    {id: 3, name: 'Meal 3', date: new Date('1 April 2018 19:00')},
    {id: 4, name: 'Meal 4', date: new Date(new Date().setHours(1))},
    {id: 4, name: 'Meal 5', date: new Date(new Date().setHours(13))},
    {id: 4, name: 'Meal 6', date: new Date(new Date().setHours(19))},
  ];
}
