import { Component, Injectable, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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
  constructor(private ingredientsService: IngredientsService) {}
  ingredients!: Ingredient[];

  ngOnInit(): void {
    this.ingredientsService.getIngredients().subscribe((ingredients) => {
      this.ingredients = ingredients;
    });
  }

  refreshIngredients() {
    this.ingredientsService.getIngredients().subscribe((ingredients) => {
      this.ingredients = ingredients;
    });
  }
}
