import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe';

@Component({
  selector: 'rb-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [
    new Recipe('Italian Breaded Pork',
      'My father\'s side of the family is Sicilian, and has been making these pork chops ',
      'http://images.media-allrecipes.com/userphotos/560x315/257811.jpg',
      []),
    new Recipe('Chicken with Mushrooms',
      'This chicken is quick, simple, delicious and has an elegant presentation! If you don\'t have prosciutto handy you can use bacon. ',
      'http://images.media-allrecipes.com/userphotos/560x315/392037.jpg',
      []),
    new Recipe('Filet Mignon',
      'his is an elegant and quick romantic dinner for two. Wonderful served with steamed aspar',
      'http://images.media-allrecipes.com/userphotos/560x315/468582.jpg',
      [])
  ];
  @Output() recipeSelected = new EventEmitter<Recipe>();

  constructor() { }

  ngOnInit() {
  }

  onSelected(recipe: Recipe) {
    this.recipeSelected.emit(recipe);
  }

}
