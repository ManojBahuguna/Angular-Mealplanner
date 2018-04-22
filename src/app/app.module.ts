import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { MealPlannerComponent } from './meal-planner/meal-planner.component';
import { MealPlannerToolbarComponent } from './meal-planner/meal-planner-toolbar/meal-planner-toolbar.component';
import { MealPlannerViewComponent } from './meal-planner/meal-planner-view/meal-planner-view.component';
import { MealPlannerCellComponent } from './meal-planner/meal-planner-view/meal-planner-cell/meal-planner-cell.component';


@NgModule({
  declarations: [
    AppComponent,
    MealPlannerComponent,
    MealPlannerToolbarComponent,
    MealPlannerViewComponent,
    MealPlannerCellComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
