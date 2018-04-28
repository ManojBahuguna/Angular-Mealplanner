import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import Config from '../models/Config';
import CalendarMonth, { DateCell } from '../models/Calendar';
import {
  faArrowAltCircleRight,
  faArrowAltCircleLeft,
  faArrowAltCircleUp,
  faArrowAltCircleDown
} from '@fortawesome/free-solid-svg-icons';
import MealEvent from '../models/MealEvent';
import MealsCollection from '../models/MealsCollection';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-meal-planner-view',
  templateUrl: './meal-planner-view.component.html',
  styleUrls: ['./meal-planner-view.component.css']
})
export class MealPlannerViewComponent implements OnInit, OnDestroy {
  @Input() config:Config;
  @Input() name: String;
  @Input() events: MealsCollection;

  private dateRangeSubscription: Subscription;
  startDate: number;
  endDate: number;

  isWeekExpanded = false;
  isMonthExpanded = false;

  iconLeft = faArrowAltCircleLeft;
  iconRight = faArrowAltCircleRight;
  iconUp = faArrowAltCircleUp;
  iconDown = faArrowAltCircleDown

  calendar:CalendarMonth;

  ngOnInit() {
    this.calendar = new CalendarMonth(this.config.date);
    
    this.dateRangeSubscription = this.config.dateRange.subscribe(range => {
      this.startDate = range.from;
      this.endDate = range.to;
    });
  }

  isDayInRange(day: DateCell) {
    const date = day.date.getDate();
    return (
      date >= this.startDate &&
      date <= this.endDate
    );
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
    this.startDate = from;
    this.endDate = to;
    this.isWeekExpanded = true;
  }

  compressWeek() {
    const date = this.config.date.getDate();
    this.startDate = date;
    this.endDate = date;
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
    this.startDate = 1;
    this.endDate = this.config.totalDays;
    this.isMonthExpanded = true;
  }

  compressMonth() {
    if(this.isWeekExpanded)
      this.expandWeek();
    else
      this.compressWeek();

    this.isMonthExpanded = false;
  }

  ngOnDestroy() {
    this.dateRangeSubscription.unsubscribe();
  }
}
