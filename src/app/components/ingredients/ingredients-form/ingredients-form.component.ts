import { Component, Injectable, OnInit } from '@angular/core';
import { ActivatedRoute, Data, Router } from '@angular/router';
import { Ingredient } from 'src/app/models/ingredient.model';
import { IngredientsService } from 'src/app/services/ingredients/ingredients.service';

@Component({
  selector: 'app-ingredients-form',
  templateUrl: './ingredients-form.component.html',
  styleUrls: ['./ingredients-form.component.css'],
})
@Injectable()
export class IngredientsFormComponent implements OnInit {
  ingredient!: Ingredient;

  constructor(
    private ingredientsService: IngredientsService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.data.subscribe((data: Data) => {
      this.ingredient = data['ingredient'];
    });
  }

  addIngredient(): void {
    this.ingredientsService.addIngredient(this.ingredient);
  }

  clearIngredient(): void {
    this.ingredient.name = '';
    this.ingredient.description = '';
    this.ingredient.halal = false;
  }
}
