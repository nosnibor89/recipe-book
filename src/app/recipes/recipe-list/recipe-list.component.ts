import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe';
import { RecipeService } from 'app/recipes/recipe.service';

@Component({
  selector: 'rb-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
  providers: [
    RecipeService
  ]
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[];
  @Output() recipeSelected = new EventEmitter<Recipe>();

  constructor(private recipesService: RecipeService) { }

  ngOnInit() {
    this.recipes = this.recipesService.getRecipes();
  }

  onSelected(recipe: Recipe) {
    this.recipeSelected.emit(recipe);
  }


}
