import { Component, Input, OnInit } from '@angular/core';
import Config from './models/Config';
import MealsCollection from './models/MealsCollection';

@Component({
  selector: 'app-meal-planner',
  templateUrl: './meal-planner.component.html',
  styleUrls: ['./meal-planner.component.css']
})

export class MealPlannerComponent implements OnInit {
  @Input() mealplansData = [];

  config = new Config;
  mealplans = [];
  
  ngOnInit() {
    this.mealplansData.forEach(plan => {
      this.mealplans.push({
        name: plan.name,
        events: new MealsCollection(plan.events)
      });
    });
  }

}
