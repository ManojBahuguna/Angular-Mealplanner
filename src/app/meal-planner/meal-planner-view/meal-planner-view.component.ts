import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-meal-planner-view',
  templateUrl: './meal-planner-view.component.html',
  styleUrls: ['./meal-planner-view.component.css']
})
export class MealPlannerViewComponent {
  @Input() config:Object;

}
