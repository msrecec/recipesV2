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
import { NavigationComponent } from './components/navigation/navigation.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { IngredientsResolver } from './components/ingredients/ingredients-form/ingredients-resolver.service';
import { RecipesResolver } from './components/recipes/recipes-form/recipes-resolver.service';
import { HighlightDirecive } from './directives/highlight.directive';

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
    NavigationComponent,
    HighlightDirecive,
  ],
  imports: [BrowserModule, AppRoutingModule, NgbModule, FormsModule],
  providers: [IngredientsResolver, RecipesResolver],
  bootstrap: [AppComponent],
})
export class AppModule {}
