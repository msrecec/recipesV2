import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IngredientsFormComponent } from './components/ingredients/ingredients-form/ingredients-form.component';
import { IngredientsResolver } from './components/ingredients/ingredients-form/ingredients-resolver.service';
import { IngredientsComponent } from './components/ingredients/ingredients/ingredients.component';
import { RecipesComponent } from './components/recipes/recipes/recipes.component';
import { ShoppingListComponent } from './components/shopping-list/shopping-list/shopping-list.component';

const routes: Routes = [
  { path: '', component: ShoppingListComponent },
  {
    path: 'ingredients',
    component: IngredientsComponent,
    children: [
      {
        path: ':name',
        component: IngredientsFormComponent,
        resolve: { ingredient: IngredientsResolver },
      },
    ],
  },
  { path: 'recipes', component: RecipesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
