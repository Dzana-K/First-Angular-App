import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { ShoppingEditComponent } from "./shopping-edit/shopping-edit.component";
import { ShoppingListComponent } from "./shopping-list.component";
import { ShoppingListRoutingModule } from "./shopping-list-routing.module";
import { SharedModule } from "../shared/shared.module";
import { LoggingService } from "../logging.service";

@NgModule({
    declarations: [
        ShoppingListComponent,
        ShoppingEditComponent,
    ],
    imports: [
        RouterModule,
        ReactiveFormsModule,
        SharedModule,
        ShoppingListRoutingModule,
        FormsModule
    ],
    //providers: [LoggingService]

})
export class ShoppingListModule {

}