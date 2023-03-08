import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Meal } from '../models/meal';

@Injectable({
  providedIn: 'root',
})
export class MealService {
  private meals: Meal[] = [
    {
      id: 1,
      name: 'Spaghetti bolognaise',
      ingredients: [
        { name: 'Spaghetti', quantity: 250, unit: 'g' },
        { name: 'Sauce tomate', quantity: 400, unit: 'g' },
        { name: 'Viande hachée', quantity: 250, unit: 'g' },
      ],
      steps:
        '1. Faire cuire les spaghetti\n2. Faire chauffer la sauce tomate et y ajouter la viande hachée\n3. Servir la viande à la sauce tomate sur les spaghetti',
    },
    {
      id: 2,
      name: 'Salade César',
      ingredients: [
        { name: 'Laitue', quantity: 1, unit: 'tête' },
        { name: 'Poulet grillé', quantity: 2, unit: 'poitrines' },
        { name: 'Tomates cerises', quantity: 250, unit: 'g' },
        { name: 'Croûtons', quantity: 100, unit: 'g' },
        { name: 'Sauce César', quantity: 50, unit: 'ml' },
      ],
      steps:
        '1. Couper la laitue en morceaux\n2. Ajouter les tomates cerises coupées en deux\n3. Ajouter les croûtons et le poulet grillé\n4. Arroser de sauce César',
    },
    {
      id: 3,
      name: 'Poulet rôti aux légumes',
      ingredients: [
        { name: 'Poulet entier', quantity: 1, unit: '' },
        { name: 'Carottes', quantity: 500, unit: 'g' },
        { name: 'Pommes de terre', quantity: 500, unit: 'g' },
        { name: 'Oignon', quantity: 1, unit: '' },
        { name: 'Ail', quantity: 2, unit: 'gousses' },
      ],
      steps:
        "1. Préchauffer le four à 200°C\n2. Éplucher et couper les légumes en morceaux\n3. Frotter le poulet avec de l'ail et du sel\n4. Mettre le poulet et les légumes dans un plat allant au four\n5. Enfourner pendant 1 heure et demi",
    },
  ];

  constructor() {}

  getMeals(): Observable<Meal[]> {
    return of(this.meals);
  }

  getMealById(id: number): Observable<Meal | undefined> {
    const meal = this.meals.find((m) => m.id === id);
    return of(meal);
  }

  addMeal(meal: Meal): void {
    meal.id = this.getNextId();
    this.meals.push(meal);
  }

  private getNextId(): number {
    const ids = this.meals.map((m) => m.id);
    return Math.max(...ids) + 1;
  }
}
