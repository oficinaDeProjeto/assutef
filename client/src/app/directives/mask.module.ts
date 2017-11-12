import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { appMaskDirective } from './mask.directive';


@NgModule({
    declarations: [appMaskDirective],
    imports: [
        BrowserModule
    ],
    exports: [appMaskDirective]
})

export class appMaskModule { }