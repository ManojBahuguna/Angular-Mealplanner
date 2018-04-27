import { Component, Input, Output } from '@angular/core';
import Config, {INFO_MODE} from '../models/Config';
import { faCoffee, faSun, faMoon, faCalendarAlt } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-meal-planner-toolbar',
  templateUrl: './meal-planner-toolbar.component.html',
  styleUrls: ['./meal-planner-toolbar.component.css']
})
export class MealPlannerToolbarComponent {
  @Input() config:Config;

  iconBreakfast = faCoffee;
  iconLunch = faSun;
  iconDinner = faMoon;
  iconCalendar = faCalendarAlt;

  DATE_INFO_MODE = INFO_MODE;

  constructor() { }

  toggleConfig(key) {
    this.config[key] = !this.config[key];
  }

  changeRangeMin(e) {
    let v = Number(e.target.value);
    if(v < 1) v = 1;
    if(v > this.config.dateRange.to) v = this.config.dateRange.to;
    this.config.dateRange.from = v;
    e.target.value = v;
  }

  changeRangeMax(e) {
    let v = Number(e.target.value);
    if(v > this.config.totalDays) v = this.config.totalDays;
    if(v < this.config.dateRange.from) v = this.config.dateRange.from;
    this.config.dateRange.to = v;
    e.target.value = v;
  }

  toggleDateInfoMode() {
    this.config.dateInfoMode ++;
    if(this.config.dateInfoMode > this.DATE_INFO_MODE.both)
      this.config.dateInfoMode = 0;
  }

}
