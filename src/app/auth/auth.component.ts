import { Component, ComponentFactoryResolver, OnDestroy, ViewChild } from "@angular/core";
import { NgForm } from "@angular/forms";
import { AuthResponseData, AuthService } from "./auth.service";
import { Observable, Subscription } from "rxjs";
import { Router } from "@angular/router";
import { AlertComponent } from "../shared/alert/alert.component";
import { PlaceholderDirective } from "../shared/placeholder/placeholder.directive";

@Component({
    selector: 'app-auth',
    templateUrl: './auth.component.html'
})
export class AuthComponent implements OnDestroy {

    isLoginMode = true;
    isLoading = false;
    error: string = null;

    @ViewChild(PlaceholderDirective, { static: false }) alertHost: PlaceholderDirective
    private closeSub: Subscription
    constructor(private authService: AuthService, private router: Router, private componentFactoryResolver: ComponentFactoryResolver) {

    }
    onSwitchMode() {
        this.isLoginMode = !this.isLoginMode
    }
    onHandleError() {
        this.error = null;
    }

    onSubmit(form: NgForm) {
        if (!form.valid) {
            return;
        }
        this.isLoading = true
        const email = form.value.email;
        const password = form.value.password;
        let AuthObs: Observable<AuthResponseData>
        if (this.isLoginMode) {
            AuthObs = this.authService.login(email, password)
        }
        else {
            AuthObs = this.authService.signup(email, password)
        }
        AuthObs.subscribe(
            resData => {
                console.log(resData)
                this.isLoading = false
                this.router.navigate(['/recipes'])
            }, errorMessage => {
                this.error = errorMessage
                this.showErrorAlert(errorMessage)
                console.log(errorMessage);
                this.isLoading = false
            }
        )
        this.error = null
        form.reset()
    }

    private showErrorAlert(message: string) {
        //const alertCmp=new AlertComponent()  you cant do that :(

        const alertCmpFactory = this.componentFactoryResolver.resolveComponentFactory(AlertComponent)
        const hostViewContainerRef = this.alertHost.viewContainerRef
        hostViewContainerRef.clear()
        const componentRef = hostViewContainerRef.createComponent(alertCmpFactory)

        componentRef.instance.message = message;

        this.closeSub = componentRef.instance.close.subscribe(() => {
            this.closeSub.unsubscribe()
            hostViewContainerRef.clear()
        })

    }
    ngOnDestroy(): void {
        if (this.closeSub) {
            this.closeSub.unsubscribe()
        }
    }
}