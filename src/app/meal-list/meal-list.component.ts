import { Component, OnInit } from '@angular/core';
import { MealService } from '../meal-service/meal.service';
import { Meal } from '../models/meal';

@Component({
  selector: 'app-meal-list',
  templateUrl: './meal-list.component.html',
  styleUrls: ['./meal-list.component.css'],
})
export class MealListComponent implements OnInit {
  meals: Meal[] = [];
  selectedMeal: Meal | undefined;
  searchTerm: string = '';

  constructor(private mealService: MealService) {}

  ngOnInit(): void {
    this.meals = this.mealService.getMeals();
  }

  showDetails(meal: Meal): void {
    this.selectedMeal = meal;
  }
}
