import MealsCollection from "./MealsCollection";

export class DateRange {
  from = new Date();
  to = new Date();
}

export enum INFO_MODE {
  date = 0,
  day,
  both
}

export default class Config {

  name = '';

  breakfast = true;
  lunch = true;
  dinner = true;

  dateInfoMode:INFO_MODE = INFO_MODE.date;
  dateRange = new DateRange();

  mealEvents:MealsCollection;
}

