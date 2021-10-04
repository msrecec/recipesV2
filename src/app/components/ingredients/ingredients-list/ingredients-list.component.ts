import { Component, Injectable, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, of, pipe } from 'rxjs';
import { Ingredient } from 'src/app/models/ingredient.model';
import { IngredientsService } from 'src/app/services/ingredients/ingredients.service';

@Component({
  selector: 'app-ingredients-list',
  templateUrl: './ingredients-list.component.html',
  styleUrls: ['./ingredients-list.component.css'],
})
@Injectable()
export class IngredientsListComponent implements OnInit {
  constructor(
    private ingredientsService: IngredientsService,
    private router: Router
  ) {}
  ingredients!: Ingredient[];

  ngOnInit(): void {
    this.ingredientsService.getIngredients().subscribe((ingredients) => {
      this.ingredients = ingredients;
    });
  }

  onCreate() {
    this.router.navigate(['ingredients', 'create']);
  }

  refreshIngredients() {
    this.ingredientsService.getIngredients().subscribe((ingredients) => {
      this.ingredients = ingredients;
    });
  }

  onEdit(ingredient: Ingredient) {
    this.router.navigate(['ingredients', 'edit', ingredient.name]);
  }

  onDelete(ingredient: Ingredient) {
    this.ingredientsService.removeByName(ingredient.name);
    this.refreshIngredients();
  }
}
