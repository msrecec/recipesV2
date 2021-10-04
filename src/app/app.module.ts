import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IngredientsFormComponent } from './components/ingredients/ingredients-form/ingredients-form.component';
import { IngredientsItemComponent } from './components/ingredients/ingredients-item/ingredients-item.component';
import { IngredientsListComponent } from './components/ingredients/ingredients-list/ingredients-list.component';
import { RecipesFormComponent } from './components/recipes/recipes-form/recipes-form.component';
import { RecipesItemComponent } from './components/recipes/recipes-item/recipes-item.component';
import { RecipesListComponent } from './components/recipes/recipes-list/recipes-list.component';
import { RecipesComponent } from './components/recipes/recipes/recipes.component';
import { ShoppingListListComponent } from './components/shopping-list/shopping-list-list/shopping-list-list.component';
import { ShoppingListComponent } from './components/shopping-list/shopping-list/shopping-list.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { IngredientsResolver } from './components/ingredients/ingredients-form/ingredients-resolver.service';
import { ShoppingListEditComponent } from './components/shopping-list/shopping-list-edit/shopping-list-edit.component';
import { ShoppingListItemComponent } from './components/shopping-list/shopping-list-item/shopping-list-item.component';

@NgModule({
  declarations: [
    AppComponent,
    IngredientsFormComponent,
    IngredientsItemComponent,
    IngredientsListComponent,
    RecipesFormComponent,
    RecipesItemComponent,
    RecipesListComponent,
    RecipesComponent,
    ShoppingListListComponent,
    ShoppingListComponent,
    NavigationComponent,
    ShoppingListEditComponent,
    ShoppingListItemComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, NgbModule, FormsModule],
  providers: [IngredientsResolver],
  bootstrap: [AppComponent],
})
export class AppModule {}
