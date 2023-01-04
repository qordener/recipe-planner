import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipePlannerComponent } from './recipe-planner.component';

describe('RecipePlannerComponent', () => {
  let component: RecipePlannerComponent;
  let fixture: ComponentFixture<RecipePlannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecipePlannerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecipePlannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
