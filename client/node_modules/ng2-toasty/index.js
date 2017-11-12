// Copyright (C) 2016-2017 Sergey Akopkokhyants
// This project is licensed under the terms of the MIT license.
// https://github.com/akserg/ng2-toasty
import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
export * from './src/toasty.service';
export * from './src/toasty.component';
export * from './src/toast.component';
export * from './src/shared';
import { ToastyComponent } from './src/toasty.component';
import { ToastComponent } from './src/toast.component';
import { SafeHtmlPipe } from './src/shared';
import { ToastyService, ToastyConfig, toastyServiceFactory } from './src/toasty.service';
export var providers = [
    ToastyConfig,
    { provide: ToastyService, useFactory: toastyServiceFactory, deps: [ToastyConfig] }
];
var ToastyModule = (function () {
    function ToastyModule() {
    }
    ToastyModule.forRoot = function () {
        return {
            ngModule: ToastyModule,
            providers: providers
        };
    };
    ToastyModule.decorators = [
        { type: NgModule, args: [{
                    imports: [CommonModule],
                    declarations: [ToastComponent, ToastyComponent, SafeHtmlPipe],
                    exports: [ToastComponent, ToastyComponent],
                    providers: providers
                },] },
    ];
    /** @nocollapse */
    ToastyModule.ctorParameters = function () { return []; };
    return ToastyModule;
}());
export { ToastyModule };
