import MealEvent, { TimeSlot } from "./MealEvent";

export const getTimeSlot = (date: Date):TimeSlot => {    
  const hours = date.getHours();

  if(hours <= 10)
    return TimeSlot.breakfast;
  else if(hours <= 15)
    return TimeSlot.lunch;
  else
    return TimeSlot.dinner;
};

export const parseToMealsArray = (array:Array<Object>):Array<MealEvent> => {
  const mealEvents:Array<MealEvent> = [];
  array.forEach(item => {
    const event = new MealEvent();
    event.id = item['id'];
    event.name = item['name'];
    event.date = item['date'];
    
    event.timeSlot = getTimeSlot(event.date);
    
    mealEvents.push(event);
  });
  return mealEvents;
};

export default class MealsCollection {
  meals:Array<MealEvent>;
  mealsByTimeSlots: Map<TimeSlot, Map<String, Array<MealEvent>>>;
  mealsByDate: Map<String, Map<TimeSlot, Array<MealEvent>>>;

  constructor(meals:Array<Object>) {
    this.meals = [];
    this.mealsByTimeSlots = new Map();
    this.mealsByDate = new Map();

    const parsedMeals = parseToMealsArray(meals);
    parsedMeals.forEach((meal) => {
      this.addMeal(meal);
    });
  }

  addMeal(meal:MealEvent) {
    this.meals.push(meal);

    const dateString = meal.date.toLocaleDateString();

    if(!this.mealsByDate.has(dateString))
      this.mealsByDate.set(dateString, new Map());
    
    const dateEvents = this.mealsByDate.get(dateString);
    if(!dateEvents.has(meal.timeSlot))
      dateEvents.set(meal.timeSlot, []);
    dateEvents.get(meal.timeSlot).push(meal);

    if(!this.mealsByTimeSlots.has(meal.timeSlot))
      this.mealsByTimeSlots.set(meal.timeSlot, new Map());
    const timeSlot = this.mealsByTimeSlots.get(meal.timeSlot);

    if(!timeSlot.has(dateString))
      timeSlot.set(dateString, []);
    timeSlot.get(dateString).push(meal);
  }
}