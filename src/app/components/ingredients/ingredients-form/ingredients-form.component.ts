import { Location } from '@angular/common';
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
    private router: Router,
    private _location: Location
  ) {}

  ngOnInit(): void {
    this.route.data.subscribe((data: Data) => {
      this.ingredient = data['ingredient'];
    });
  }

  addIngredient(): void {
    this.ingredientsService.addIngredient(this.ingredient);
    // this.router.navigate(['ingredients']);
    this._location.back();
  }

  cancel(): void {
    this._location.back();
  }
}
