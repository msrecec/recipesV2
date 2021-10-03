import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IngredientsFormComponent } from './components/ingredients/ingredients-form/ingredients-form.component';
import { IngredientsItemComponent } from './components/ingredients/ingredients-item/ingredients-item.component';
import { IngredientsListComponent } from './components/ingredients/ingredients-list/ingredients-list.component';
import { IngredientsComponent } from './components/ingredients/ingredients/ingredients.component';
import { RecipesFormComponent } from './components/recipes/recipes-form/recipes-form.component';
import { RecipesItemComponent } from './components/recipes/recipes-item/recipes-item.component';
import { RecipesListComponent } from './components/recipes/recipes-list/recipes-list.component';
import { RecipesComponent } from './components/recipes/recipes/recipes.component';
import { ShoppingListFormComponent } from './components/shopping-list/shopping-list-form/shopping-list-form.component';
import { ShoppingListItemComponent } from './components/shopping-list/shopping-list-item/shopping-list-item.component';
import { ShoppingListListComponent } from './components/shopping-list/shopping-list-list/shopping-list-list.component';
import { ShoppingListComponent } from './components/shopping-list/shopping-list/shopping-list.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    IngredientsFormComponent,
    IngredientsItemComponent,
    IngredientsListComponent,
    IngredientsComponent,
    RecipesFormComponent,
    RecipesItemComponent,
    RecipesListComponent,
    RecipesComponent,
    ShoppingListFormComponent,
    ShoppingListItemComponent,
    ShoppingListListComponent,
    ShoppingListComponent,
    NavigationComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, NgbModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
