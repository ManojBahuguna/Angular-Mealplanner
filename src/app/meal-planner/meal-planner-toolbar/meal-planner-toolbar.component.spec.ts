import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MealPlannerToolbarComponent } from './meal-planner-toolbar.component';

describe('MealPlannerToolbarComponent', () => {
  let component: MealPlannerToolbarComponent;
  let fixture: ComponentFixture<MealPlannerToolbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MealPlannerToolbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MealPlannerToolbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
