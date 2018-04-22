import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-meal-planner-toolbar',
  templateUrl: './meal-planner-toolbar.component.html',
  styleUrls: ['./meal-planner-toolbar.component.css']
})
export class MealPlannerToolbarComponent {
  @Input() config:Object;

  constructor() { }

  toggleConfig(key) {
    this.config[key] = !this.config[key];
  }

}
