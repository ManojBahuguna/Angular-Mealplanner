import { Component, Input, OnInit } from '@angular/core';
import Config from '../models/Config';
import CalendarMonth from '../models/Calendar';

@Component({
  selector: 'app-meal-planner-view',
  templateUrl: './meal-planner-view.component.html',
  styleUrls: ['./meal-planner-view.component.css']
})
export class MealPlannerViewComponent implements OnInit {
  @Input() config:Config;

  date = new Date();
  calendar = new CalendarMonth(this.date);

  ngOnInit() {
    
  }

}
