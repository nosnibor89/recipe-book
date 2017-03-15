import { Component, OnInit } from '@angular/core';
import { Ingredient } from 'app/recipes/ingredient';

@Component({
  selector: 'rb-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  items: Ingredient[] = [
    new Ingredient('Fish', 1),
    new Ingredient('Rice', 0.5)
  ];

  constructor() { }

  ngOnInit() {
  }

}
