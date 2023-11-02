import { NgModule } from "@angular/core";
import { AlertComponent } from "./alert/alert.component";
import { PlaceholderDirective } from "./placeholder/placeholder.directive";
import { LoaderComponent } from "./loader/loader.component";
import { DropdownDirective } from "./dropdown.directive";
import { CommonModule } from "@angular/common";
import { LoggingService } from "../logging.service";

@NgModule({
    declarations: [
        AlertComponent,
        PlaceholderDirective,
        LoaderComponent,
        DropdownDirective
    ],
    imports: [
        CommonModule
    ]
    ,
    exports: [
        AlertComponent,
        PlaceholderDirective,
        LoaderComponent,
        DropdownDirective,
        CommonModule
    ],
    entryComponents: [AlertComponent],
    providers: [LoggingService]
})
export class SharedModule {

}