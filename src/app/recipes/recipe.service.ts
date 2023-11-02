import { EventEmitter, Injectable } from "@angular/core";
import { Recipe } from "./recipe.model";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";
import { Subject } from "rxjs";
@Injectable()
export class RecipeService {
  recipesChanged = new Subject<Recipe[]>();

  private recipes: Recipe[] = []
  /*= [
    new Recipe('A test Recipe', 'this is simply a test', 'https://th.bing.com/th/id/OIP.-IWYQUwbyXi1iW7CYKS-0AHaE8?pid=ImgDet&rs=1'
      , [new Ingredient('meat', 1),
      new Ingredient('fries', 20)]),
    new Recipe('Another test Recipe', 'this is simply a test', 'https://th.bing.com/th/id/OIP.-IWYQUwbyXi1iW7CYKS-0AHaE8?pid=ImgDet&rs=1',
      [new Ingredient('meat', 1),
      new Ingredient('fries', 20)]),

  ];*/
  constructor(private slService: ShoppingListService) { }

  getRecipes() {
    return this.recipes.slice();
  }
  getRecipe(index: number) {
    return this.recipes[index]
  }
  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }
  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
    this.recipesChanged.next(this.recipes.slice())
  }
  updateRecipe(index: number, newRecipe: Recipe) {
    this.recipes[index] = newRecipe
    this.recipesChanged.next(this.recipes.slice())
  }
  deleteRecipe(index: number) {
    this.recipes.splice(index, 1)
    this.recipesChanged.next(this.recipes.slice())

  }
  setRecipe(recipes: Recipe[]) {
    this.recipes = recipes
    this.recipesChanged.next(this.recipes.slice())
  }
}