import { Routes, RouterModule } from '@angular/router';
import { RecipeStartComponent } from 'app/recipes/recipe-start/recipe-start.component';
import { RecipeDetailComponent } from 'app/recipes/recipe-detail/recipe-detail.component';
import { RecipeEditComponent } from 'app/recipes/recipe-edit/recipe-edit.component';

const ROUTES: Routes = [
  {path: '', component: RecipeStartComponent},
  {path: 'new', component: RecipeEditComponent},
  {path: ':id', component: RecipeDetailComponent},
  {path: ':id/edit', component: RecipeEditComponent}
];

export const RECIPES_ROUTES = ROUTES;
