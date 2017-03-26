import { Injectable } from '@angular/core';
import { Ingredient } from 'app/recipes/ingredient';

@Injectable()
export class ShoppingListService {

  items: Ingredient[] = [];

  constructor() { }

  getItems(): Ingredient[] {
    return this.items;
  }

  addItems(items: Ingredient[]): void {
    Array.prototype.push.apply(this.items, items);
  }

}
