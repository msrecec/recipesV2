import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot,
} from '@angular/router';
import { Observable } from 'rxjs';
import { Ingredient } from 'src/app/models/ingredient.model';
import { IngredientsService } from 'src/app/services/ingredients/ingredients.service';

@Injectable()
export class IngredientsResolver implements Resolve<Ingredient> {
  constructor(private ingredientsService: IngredientsService) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<Ingredient> | Ingredient {
    return this.ingredientsService.getIngredientByName(route.params['name']);
  }
}
