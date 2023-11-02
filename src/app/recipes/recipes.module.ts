import { NgModule } from "@angular/core";
import { RecipDetailComponent } from "./recip-detail/recip-detail.component";
import { RecipeEditComponent } from "./recipe-edit/recipe-edit.component";
import { RecipeItemComponent } from "./recipe-list/recipe-item/recipe-item.component";
import { RecipeListComponent } from "./recipe-list/recipe-list.component";
import { RecipeStartComponent } from "./recipe-start/recipe-start.component";
import { RecipesComponent } from "./recipes.component";
import { RouterModule } from "@angular/router";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { RecipesRoutingModule } from "./recipes-routing.module";
import { SharedModule } from "../shared/shared.module";

@NgModule({
    declarations: [
        RecipesComponent,
        RecipeListComponent,
        RecipDetailComponent,
        RecipeItemComponent,
        RecipeStartComponent,
        RecipeEditComponent,
    ],
    imports: [
        RouterModule,
        ReactiveFormsModule,
        SharedModule,
        RecipesRoutingModule
    ],

})
export class RecipesModule {

}