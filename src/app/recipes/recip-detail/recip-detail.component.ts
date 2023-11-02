import { Component, Input, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-recip-detail',
  templateUrl: './recip-detail.component.html',
  styleUrls: ['./recip-detail.component.css']
})
export class RecipDetailComponent implements OnInit {
  
 recipe: Recipe;
 id:number;
 constructor(private recipeService:RecipeService, 
  private route:ActivatedRoute,
  private router: Router
  ){

  }
 ngOnInit(): void {
  this.route.params.subscribe((params:Params)=>{
    this.id=+params['id'];
    this.recipe=this.recipeService.getRecipe(this.id);
  })
    
 }
 onAddToShoppingList(){
  this.recipeService.addIngredientsToShoppingList(this.recipe.ingredients);
 }
 onEdit(){
  this.router.navigate(['edit'], {relativeTo:this.route})
  //this.router.navigate(['../', this.id, 'edit'],{relativeTo:this.route})

 }
 onDeleteRecipe(){
  this.recipeService.deleteRecipe(this.id);
  this.router.navigate(['/recipes']);
 }

}
