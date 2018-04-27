import { Component, Input, OnInit } from '@angular/core';
import Config from '../models/Config';
import CalendarMonth from '../models/Calendar';
import {
  faArrowAltCircleRight,
  faArrowAltCircleLeft,
  faArrowAltCircleUp,
  faArrowAltCircleDown
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-meal-planner-view',
  templateUrl: './meal-planner-view.component.html',
  styleUrls: ['./meal-planner-view.component.css']
})
export class MealPlannerViewComponent implements OnInit {
  @Input() config:Config;

  isWeekExpanded = false;
  isMonthExpanded = false;

  iconLeft = faArrowAltCircleLeft;
  iconRight = faArrowAltCircleRight;
  iconUp = faArrowAltCircleUp;
  iconDown = faArrowAltCircleDown

  calendar:CalendarMonth;

  ngOnInit() {
    this.calendar = new CalendarMonth(this.config.date);
  }

  toggleWeek() {
    if(this.isWeekExpanded || this.isMonthExpanded)
      this.compressWeek();
    else
      this.expandWeek();
  }

  expandWeek() {
    const day = this.config.date.getDay();
    const date = this.config.date.getDate();
    const diff = (date - day) + 1;
    const from = diff < 1 ? 1 : diff;
    let to = diff + 6;
    if(to > this.config.totalDays)
      to = this.config.totalDays;
    this.config.dateRange.from = from;
    this.config.dateRange.to = to;
    this.isWeekExpanded = true;
  }

  compressWeek() {
    const date = this.config.date.getDate();
    this.config.dateRange.from = date;
    this.config.dateRange.to = date;
    this.isWeekExpanded = false;
    this.isMonthExpanded = false;
  }

  
  toggleMonth() {
    if(this.isMonthExpanded)
      this.compressMonth();
    else
      this.expandMonth();
  }

  expandMonth() {
    this.config.dateRange.from = 1;
    this.config.dateRange.to = this.config.totalDays;
    this.isMonthExpanded = true;
  }

  compressMonth() {
    if(this.isWeekExpanded)
      this.expandWeek();
    else
      this.compressWeek();

    this.isMonthExpanded = false;
  }
}
