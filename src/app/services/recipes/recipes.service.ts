import { Injectable } from '@angular/core';
import { Recipe } from 'src/app/models/recipe.model';
import { IngredientsService } from '../ingredients/ingredients.service';

@Injectable({
  providedIn: 'root',
})
export class RecipesService {
  constructor(ingredientsService: IngredientsService) {}
}
