export class Meal {
  id: number;
  name: string;
  image?: string;
  ingredients: Ingredient[];
  instructions: string[];
  preparationTime: number;
  description?: string;

  constructor(
    id: number,
    name: string,
    ingredients: Ingredient[],
    instructions: string[],
    preparationTime: number
  ) {
    this.id = id;
    this.name = name;
    this.ingredients = ingredients;
    this.instructions = instructions;
    this.preparationTime = preparationTime;
  }
}

export interface Ingredient {
  name: string;
  quantity: number;
  unit: string;
}
