import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Recipe } from '../recipe';
import { ShoppingListService } from 'app/shopping-list/shopping-list.service';
import { RecipeService } from 'app/recipes/recipe.service';
import { ISubscription } from 'rxjs/Subscription';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'rb-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit, OnDestroy {

  selectedRecipe: Recipe;
  private recipeId;
  private subscription: ISubscription;

  constructor(
    private shoppingListService: ShoppingListService,
    private recipeService: RecipeService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {

  }

  ngOnInit() {
    this.subscription = this.activatedRoute.params.subscribe(
      (param: any) => {
        this.recipeId = param['id'];
        this.selectedRecipe = this.recipeService.getRecipe(this.recipeId);
      }

    );
  }


  addIngridientsToSL(): void {
    // this.selectedRecipe.ingredients
    this.shoppingListService.addItems(this.selectedRecipe.ingredients);
  }

  onEdit() {
    console.log(this.recipeId);
    this.router.navigate(['/recipes', this.recipeId, 'edit']);
    // this.router.navigate([this.recipeId, 'edit']);
  }

  onDelete() {
    this.recipeService.delete(this.selectedRecipe);
    this.router.navigate(['/recipes']);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
