import { Inject, Injectable, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Ingredient } from 'src/app/models/ingredient.model';
import { Recipe } from 'src/app/models/recipe.model';
import { IngredientsService } from '../ingredients/ingredients.service';

@Injectable({
  providedIn: 'root',
})
export class RecipesService implements OnInit {
  private recipes: Recipe[] = [
    new Recipe('test1', 'This is a first test of the description', [
      new Ingredient('test1', 'Fatty red meat', false),
      new Ingredient('pork2', 'Fatty red meat', false),
    ]),
    new Recipe('test2', 'This is a second test of the description', [
      new Ingredient('pork3', 'Fatty red meat', false),
      new Ingredient('pork4', 'Fatty red meat', false),
    ]),
    new Recipe('test3', 'This is a third test of the description', [
      new Ingredient('pork5', 'Fatty red meat', false),
      new Ingredient('pork6', 'Fatty red meat', false),
    ]),
    new Recipe('test4', 'This is a fourth test of the description', [
      new Ingredient('pork7', 'Fatty red meat', false),
    ]),
  ];

  constructor(private ingredientsService: IngredientsService) {}

  ngOnInit(): void {}

  /**
   * Returns all recipes
   *
   * @returns recipes
   */

  getRecipes(): Observable<Recipe[]> {
    return of(this.recipes);
  }

  /**
   * Gets recipe by name
   *
   * @param name name of the recipe
   * @returns recipe
   */

  getRecipeByName(name: string): Observable<Recipe> {
    let recipe = new Recipe('', '', []);

    this.recipes.forEach((i) => {
      if (i.name.localeCompare(name) === 0) {
        recipe = i;
      }
    });

    return of(recipe);
  }

  /**
   * Removes recipe by name
   *
   * @param name name of the recipe
   */

  removeRecipeByName(name: string): void {
    this.recipes = this.recipes.filter((recipe) => recipe.name !== name);
  }

  /**
   * Adds the new recipe or merges the previous recipe
   *
   * @param recipe recipe to be pushed
   */

  addRecipe(recipe: Recipe): void {
    let cmp = false;
    this.recipes.forEach((i) => {
      if (i.name.localeCompare(recipe.name) === 0) {
        cmp = true;
        i.description = recipe.description;
        i.ingredients = recipe.ingredients;
      }
    });
    if (!cmp) {
      this.recipes.push(recipe);
    }
  }
}
