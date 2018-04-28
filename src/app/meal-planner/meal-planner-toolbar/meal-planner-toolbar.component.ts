import { Component, Input, Output, OnInit } from '@angular/core';
import Config, {INFO_MODE} from '../models/Config';
import { faCoffee, faSun, faMoon, faCalendarAlt } from '@fortawesome/free-solid-svg-icons';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-meal-planner-toolbar',
  templateUrl: './meal-planner-toolbar.component.html',
  styleUrls: ['./meal-planner-toolbar.component.css']
})
export class MealPlannerToolbarComponent implements OnInit {
  @Input() config:Config;

  private dateRangeSubscription: Subscription;
  dateRange: {from: number, to: number};

  iconBreakfast = faCoffee;
  iconLunch = faSun;
  iconDinner = faMoon;
  iconCalendar = faCalendarAlt;

  DATE_INFO_MODE = INFO_MODE;

  constructor() { }
  
  ngOnInit() {
    this.dateRangeSubscription = this.config.dateRange.subscribe(range => {
      this.dateRange = range;
    });
  }

  toggleConfig(key) {
    this.config[key] = !this.config[key];
  }

  changeRangeMin(e) {
    let v = Number(e.target.value);
    if(v < 1) v = 1;
    if(v > this.dateRange.to) v = this.dateRange.to;
    this.config.setDateRange({
      from: v,
      to: this.dateRange.to
    });
    e.target.value = v;
  }

  changeRangeMax(e) {
    let v = Number(e.target.value);
    if(v > this.config.totalDays) v = this.config.totalDays;
    if(v < this.dateRange.from) v = this.dateRange.from;
    this.config.setDateRange({
      from: this.dateRange.from,
      to: v
    });
    e.target.value = v;
  }

  toggleDateInfoMode() {
    this.config.dateInfoMode ++;
    if(this.config.dateInfoMode > this.DATE_INFO_MODE.both)
      this.config.dateInfoMode = 0;
  }

}
