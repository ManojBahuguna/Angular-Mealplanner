export enum TimeSlot {
  breakfast = 0,
  lunch,
  dinner
}

export default class MealEvent {
  id:Number;
  name:String;
  date:Date;
  timeSlot:TimeSlot;
}