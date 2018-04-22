import { Component, Input, OnInit } from '@angular/core';
import Config from './models/Config';
import MealsCollection from './models/MealsCollection';

@Component({
  selector: 'app-meal-planner',
  templateUrl: './meal-planner.component.html',
  styleUrls: ['./meal-planner.component.css']
})

export class MealPlannerComponent implements OnInit {
  @Input() events = [];
  @Input() name = '';

  config = new Config;
  
  ngOnInit() {
    this.config.name = this.name;

    this.config.mealEvents = new MealsCollection(this.events);
  }

}
