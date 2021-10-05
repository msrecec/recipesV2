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
      this.recipe = data['recipe'];
    });
  }

  toggleIngredient(name: string) {
    const length = this.ingredients.length;
    if (length > 0) {
      this.ingredients = this.ingredients.filter((i) => i.name !== name);
      if (this.ingredients.length == length) {
        this.ingredientsService
          .getIngredientByName(name)
          .subscribe((ingredient) => {
            this.recipe.ingredients.push(ingredient);
          });
      }
    } else {
      this.ingredientsService.getIngredientByName(name).subscribe((i) => {
        this.recipe.ingredients.push(i);
      });
    }
  }

  addRecipe() {
    this.recipesService.addRecipe(this.recipe);
  }

  cancelRecipe() {
    this._location.back();
  }
}
