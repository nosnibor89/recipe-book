import { Injectable } from '@angular/core';
import { Recipe } from 'app/recipes/recipe';
import { Ingredient } from 'app/recipes/ingredient';

@Injectable()
export class RecipeService {

  private recipes: Recipe[] = [
    new Recipe('Italian Breaded Pork',
      'My father\'s side of the family is Sicilian, and has been making these pork chops ',
      'http://images.media-allrecipes.com/userphotos/560x315/257811.jpg',
      [
        new Ingredient('Frech Fries', 2),
        new Ingredient('Pork Meat', 1)
      ]),
    new Recipe('Chicken with Mushrooms',
      'This chicken is quick, simple, delicious and has an elegant presentation! If you don\'t have prosciutto handy you can use bacon. ',
      'http://images.media-allrecipes.com/userphotos/560x315/392037.jpg',
      []),
    new Recipe('Filet Mignon',
      'his is an elegant and quick romantic dinner for two. Wonderful served with steamed aspar',
      'http://images.media-allrecipes.com/userphotos/560x315/468582.jpg',
      [])
  ];

  constructor() { }


  getRecipes(): Recipe[] {
    return this.recipes;
  }

  getRecipe(id): Recipe {
    return this.recipes[id];
  }

  delete(recipe: Recipe){
    this.recipes.splice(this.recipes.indexOf(recipe), 1);
  }

}
