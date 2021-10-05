import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Data, Router } from '@angular/router';
import { Ingredient } from 'src/app/models/ingredient.model';
import { Recipe } from 'src/app/models/recipe.model';
import { IngredientsService } from 'src/app/services/ingredients/ingredients.service';
import { RecipesService } from 'src/app/services/recipes/recipes.service';

@Component({
  selector: 'app-recipes-form',
  templateUrl: './recipes-form.component.html',
  styleUrls: ['./recipes-form.component.css'],
})
export class RecipesFormComponent implements OnInit {
  recipe!: Recipe;
  ingredients!: Ingredient[];

  constructor(
    private recipesService: RecipesService,
    private ingredientsService: IngredientsService,
    private route: ActivatedRoute,
    private router: Router,
    private _location: Location
  ) {}

  ngOnInit(): void {
    this.route.data.subscribe((data: Data) => {
      this.recipe = JSON.parse(JSON.stringify(data['recipe']));
      this.ingredientsService.getIngredients().subscribe((ing) => {
        this.ingredients = ing;
      });
    });
  }

  addIngredient(name: string) {
    let length = this.recipe.ingredients.length;
    this.ingredientsService.getIngredientByName(name).subscribe((ing) => {
      this.recipe.ingredients.forEach((ingre) => {
        if (ing.name.localeCompare(ingre.name) === 0) {
          alert('This ingredient was already added');
          return;
        }
      });
      this.recipe.ingredients.push(ing);
      this.ingredients = this.ingredients.filter((i) => i.name !== ing.name);
    });
  }

  removeIngredient(ingredient: Ingredient) {
    let length = this.recipe.ingredients.length;
    this.recipe.ingredients = this.recipe.ingredients.filter(
      (i) => i.name.localeCompare(ingredient.name) !== 0
    );
    if (this.recipe.ingredients.length < length) {
      let flag = false;
      this.ingredients.forEach((ingre) => {
        if (ingre.name.localeCompare(ingredient.name) === 0) {
          flag = true;
        }
      });
      if (!flag) {
        this.ingredients.push(ingredient);
      }
    }
  }

  addRecipe() {
    this.recipesService.addRecipe(this.recipe);
    this.router.navigate(['recipes']);
  }

  cancelRecipe() {
    this._location.back();
  }
}
