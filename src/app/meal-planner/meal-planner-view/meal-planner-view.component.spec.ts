import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MealPlannerViewComponent } from './meal-planner-view.component';

describe('MealPlannerViewComponent', () => {
  let component: MealPlannerViewComponent;
  let fixture: ComponentFixture<MealPlannerViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MealPlannerViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MealPlannerViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
