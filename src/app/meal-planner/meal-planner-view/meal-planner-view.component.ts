import { Component, Input } from '@angular/core';
import Config from '../models/Config';

@Component({
  selector: 'app-meal-planner-view',
  templateUrl: './meal-planner-view.component.html',
  styleUrls: ['./meal-planner-view.component.css']
})
export class MealPlannerViewComponent {
  @Input() config:Config;

  date = new Date();
}
