import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { MealService } from '../meal-service/meal.service';
import { Meal } from '../models/meal';

@Component({
  selector: 'app-meal-form',
  templateUrl: './meal-form.component.html',
  styleUrls: ['./meal-form.component.css'],
})
export class MealFormComponent implements OnInit {
  mealForm!: FormGroup;
  meal: Meal = {
    id: 0,
    name: '',
    ingredients: [],
    instructions: [],
    preparationTime: 10,
  };

  constructor(private mealService: MealService) {}

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    let mealName = '';
    let mealImage = '';
    let mealIngredients = new FormArray([]);
    let mealInstructions = '';
    let mealPreparationTime = '';

    this.mealForm = new FormGroup({
      name: new FormControl(mealName, Validators.required),
      imagePath: new FormControl(mealImage, Validators.required),
      ingredients: mealIngredients,
      instructions: new FormControl(mealInstructions, Validators.required),
      preparationTime: new FormControl(
        mealPreparationTime,
        Validators.required
      ),
    });
  }

  onSubmit() {
    const newMeal = new Meal(
      this.mealForm.value['name'],
      this.mealForm.value['imagePath'],
      this.mealForm.value['ingredients'],
      this.mealForm.value['instructions'],
      this.mealForm.value['preparationTime']
    );
    this.mealService.addMeal(newMeal);
    this.mealForm.reset();
  }

  onAddIngredient() {
    (<FormArray>this.mealForm.get('ingredients')).push(
      new FormGroup({
        name: new FormControl(null, Validators.required),
        amount: new FormControl(null, [
          Validators.required,
          Validators.pattern(/^[1-9]+[0-9]*$/),
        ]),
      })
    );
  }

  get controls() {
    // getter pour les controles du formulaire
    return (<FormArray>this.mealForm.get('ingredients')).controls;
  }
}
