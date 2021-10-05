import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IngredientsFormComponent } from './components/ingredients/ingredients-form/ingredients-form.component';
import { IngredientsResolver } from './components/ingredients/ingredients-form/ingredients-resolver.service';
import { IngredientsListComponent } from './components/ingredients/ingredients-list/ingredients-list.component';
import { RecipesFormComponent } from './components/recipes/recipes-form/recipes-form.component';
import { RecipesResolver } from './components/recipes/recipes-form/recipes-resolver.service';
import { RecipesComponent } from './components/recipes/recipes/recipes.component';

const routes: Routes = [
  { path: '', redirectTo: '/recipes', pathMatch: 'full' },
  {
    path: 'ingredients',
    component: IngredientsListComponent,
  },
  {
    path: 'ingredients/edit/:name',
    component: IngredientsFormComponent,
    resolve: { ingredient: IngredientsResolver },
  },
  {
    path: 'ingredients/create',
    component: IngredientsFormComponent,
    resolve: { ingredient: IngredientsResolver },
  },
  {
    path: 'recipes',
    component: RecipesComponent,
    children: [
      {
        path: 'edit/:name',
        component: RecipesFormComponent,
        resolve: { recipe: RecipesResolver },
      },
      {
        path: 'create',
        component: RecipesFormComponent,
        resolve: { recipe: RecipesResolver },
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
