import { Component, OnInit } from '@angular/core';
import { MealService } from '../meal-service/meal.service';

@Component({
  selector: 'app-meal-planner',
  templateUrl: './meal-planner.component.html',
  styleUrls: ['./meal-planner.component.css'],
})
export class MealPlannerComponent implements OnInit {
  meals: Meal[] = [];
  ingredients: string[] = [];

  constructor(private mealService: MealService) {}

  ngOnInit(): void {
    this.meals = this.mealService.getMeals();
    this.updateIngredients();
  }

  addMeal(): void {
    // Logique pour ajouter un repas
  }

  removeMeal(): void {
    // Logique pour supprimer un repas
  }

  shuffleMeals(): void {
    // Logique pour mélanger les repas
  }

  editMeal(index: number): void {
    // Logique pour modifier un repas
  }

  updateIngredients(): void {
    // Logique pour mettre à jour la liste des ingrédients
  }
}
