import { Component, Input, Output } from '@angular/core';
import Config from '../models/Config';

@Component({
  selector: 'app-meal-planner-toolbar',
  templateUrl: './meal-planner-toolbar.component.html',
  styleUrls: ['./meal-planner-toolbar.component.css']
})
export class MealPlannerToolbarComponent {
  @Input() config:Config;

  constructor() { }

  toggleConfig(key) {
    this.config[key] = !this.config[key];
  }

}
