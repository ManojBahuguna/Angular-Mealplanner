import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { MealPlannerComponent } from './meal-planner/meal-planner.component';


@NgModule({
  declarations: [
    AppComponent,
    MealPlannerComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
