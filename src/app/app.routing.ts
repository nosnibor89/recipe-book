import { Routes, RouterModule } from '@angular/router';
import { RecipesComponent } from 'app/recipes/recipes.component';
import { ShoppingListComponent } from 'app/shopping-list/shopping-list.component';


const ROUTES: Routes = [
  {path: '', redirectTo: '/recipes', pathMatch: 'full' },
  {path: 'recipes', component: RecipesComponent },
  {path: 'shopping-list', component: ShoppingListComponent }
];

export const APP_ROUTES = RouterModule.forRoot(ROUTES);
