import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot,
} from '@angular/router';
import { Observable } from 'rxjs';
import { Recipe } from 'src/app/models/recipe.model';
import { RecipesService } from 'src/app/services/recipes/recipes.service';

@Injectable()
export class RecipesResolver implements Resolve<Recipe> {
  constructor(private recipesService: RecipesService) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<Recipe> | Recipe {
    return this.recipesService.getRecipeByName(route.params['name']);
  }
}
