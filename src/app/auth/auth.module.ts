import { NgModule } from '@angular/core';
import { AuthComponent } from './auth.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { AuthRoutingModule } from './auth-routing.module';




@NgModule({
    declarations: [

        AuthComponent,

    ],
    imports: [
        CommonModule,
        FormsModule,
        SharedModule,
        AuthRoutingModule
    ]
})

export class AuthModule {

}