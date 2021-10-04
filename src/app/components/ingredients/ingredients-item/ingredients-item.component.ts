import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Ingredient } from 'src/app/models/ingredient.model';
import { IngredientsService } from 'src/app/services/ingredients/ingredients.service';

@Component({
  selector: 'app-ingredients-item',
  templateUrl: './ingredients-item.component.html',
  styleUrls: ['./ingredients-item.component.css'],
})
export class IngredientsItemComponent implements OnInit {
  @Input() ingredient!: Ingredient;
  @Output() onRemoveIngredient = new EventEmitter<Ingredient>();

  constructor(
    private router: Router,
    private ingredientsService: IngredientsService
  ) {}

  onEdit() {
    this.router.navigate(['ingredients', 'edit', this.ingredient.name]);
  }

  onDelete() {
    this.ingredientsService.removeByName(this.ingredient.name);
    this.onRemoveIngredient.emit(this.ingredient);
  }

  ngOnInit(): void {}
}
