import { Component, Injectable, OnInit } from '@angular/core';
import { Recipe } from 'src/app/models/recipe.model';
import { RecipesService } from 'src/app/services/recipes/recipes.service';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css'],
})
@Injectable()
export class RecipesListComponent implements OnInit {
  recipes!: Recipe[];
  constructor(private recipesService: RecipesService) {}

  ngOnInit(): void {
    this.recipesService.getRecipes().subscribe((recipes) => {
      this.recipes = recipes;
    });
  }
}
