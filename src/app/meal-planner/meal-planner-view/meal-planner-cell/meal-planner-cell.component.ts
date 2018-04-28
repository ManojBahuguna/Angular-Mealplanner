import { Component, OnInit, Input } from '@angular/core';
import Config, { INFO_MODE } from '../../models/Config';
import MealsCollection, { getTimeSlot } from '../../models/MealsCollection';
import MealEvent, { TimeSlot } from '../../models/MealEvent';

@Component({
  selector: 'app-meal-planner-cell',
  templateUrl: './meal-planner-cell.component.html',
  styleUrls: ['./meal-planner-cell.component.css']
})
export class MealPlannerCellComponent implements OnInit {
  @Input() config:Config;
  @Input() date:Date;
  @Input() name: String;
  @Input() events: MealsCollection;
  breakfastMeals:Array<MealEvent>;
  lunchMeals:Array<MealEvent>;
  dinnerMeals:Array<MealEvent>;

  DATE_INFO_MODE = INFO_MODE;

  constructor() { }

  ngOnInit() {
    const mealsByDate = this.events.mealsByDate.get(this.date.toLocaleDateString());
    if(mealsByDate) {
      this.breakfastMeals = mealsByDate.get(TimeSlot.breakfast);
      this.lunchMeals = mealsByDate.get(TimeSlot.lunch);
      this.dinnerMeals = mealsByDate.get(TimeSlot.dinner);
    }
  }

}
