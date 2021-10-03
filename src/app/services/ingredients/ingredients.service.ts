import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Ingredient } from 'src/app/models/ingredient.model';

@Injectable({
  providedIn: 'root',
})
export class IngredientsService {
  constructor() {}

  private ingredients: Ingredient[] = [
    new Ingredient('pork', 'Fatty red meat', false),
    new Ingredient('carrot', 'Red vegetable', true),
    new Ingredient('chicken', 'Non fatty white meat', true),
    new Ingredient('potato', 'Yellow fruit', true),
    new Ingredient('rice', 'White plant fruit or whatever', true),
    new Ingredient('pork fat', 'Literally pork fat', false),
    new Ingredient('eggs', 'Literally eggs lol', true),
  ];

  public getIngredients(): Observable<Ingredient[]> {
    return of(this.ingredients);
  }

  public getIngredientByName(name: string): Observable<Ingredient> {
    let ingredient = new Ingredient('', '', false);
    this.ingredients.forEach((i) => {
      if (i.name.localeCompare(name) === 0) {
        ingredient = i;
      }
    });
    return of(ingredient);
  }

  /**
   * Adds ingredient to the list of ingredients
   *
   * @param ingredient
   */

  public addIngredient(ingredient: Ingredient): void {
    let cmp = false;
    this.ingredients.forEach((i) => {
      if (i.name.localeCompare(ingredient.name) === 0) {
        cmp = true;
        i.description = ingredient.description;
        i.halal = ingredient.halal;
      }
    });
    if (!cmp) {
      this.ingredients.push(ingredient);
    }
  }

  public removeByName(name: string): void {
    this.ingredients = this.ingredients.filter((value) => value.name !== name);
  }
}
