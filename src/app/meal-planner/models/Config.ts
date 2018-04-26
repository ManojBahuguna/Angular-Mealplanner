import MealsCollection from "./MealsCollection";

export enum INFO_MODE {
  date = 0,
  day,
  both
}

export default class Config {
  date = new Date();
  totalDays = new Date(this.date.getFullYear(), this.date.getMonth() + 1, 0).getDate();

  name = '';

  breakfast = true;
  lunch = true;
  dinner = true;

  dateInfoMode:INFO_MODE = INFO_MODE.date;
  dateRange = {
    from: this.date.getDate(),
    to: this.date.getDate()
  };

  mealEvents:MealsCollection;
}

