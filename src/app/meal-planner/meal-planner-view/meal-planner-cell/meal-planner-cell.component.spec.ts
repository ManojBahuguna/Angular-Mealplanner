import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MealPlannerCellComponent } from './meal-planner-cell.component';

describe('MealPlannerCellComponent', () => {
  let component: MealPlannerCellComponent;
  let fixture: ComponentFixture<MealPlannerCellComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MealPlannerCellComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MealPlannerCellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
