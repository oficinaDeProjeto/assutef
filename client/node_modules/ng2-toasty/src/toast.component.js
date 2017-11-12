// Copyright (C) 2016-2017 Sergey Akopkokhyants
// This project is licensed under the terms of the MIT license.
// https://github.com/akserg/ng2-toasty
import { Component, Input, Output, EventEmitter } from '@angular/core';
/**
 * A Toast component shows message with title and close button.
 */
var ToastComponent = (function () {
    function ToastComponent() {
        this.closeToastEvent = new EventEmitter();
    }
    /**
     * Event handler invokes when user clicks on close button.
     * This method emit new event into ToastyContainer to close it.
     */
    ToastComponent.prototype.close = function ($event) {
        $event.preventDefault();
        this.closeToastEvent.next(this.toast);
    };
    ToastComponent.decorators = [
        { type: Component, args: [{
                    selector: 'ng2-toast',
                    template: "\n        <div class=\"toast\" [ngClass]=\"[toast.type, toast.theme]\">\n            <div *ngIf=\"toast.showClose\" class=\"close-button\" (click)=\"close($event)\"></div>\n            <div *ngIf=\"toast.title || toast.msg\" class=\"toast-text\">\n                <span *ngIf=\"toast.title\" class=\"toast-title\" [innerHTML]=\"toast.title | safeHtml\"></span>\n                <br *ngIf=\"toast.title && toast.msg\" />\n                <span *ngIf=\"toast.msg\" class=\"toast-msg\" [innerHtml]=\"toast.msg | safeHtml\"></span>\n            </div>\n        </div>"
                },] },
    ];
    /** @nocollapse */
    ToastComponent.ctorParameters = function () { return []; };
    ToastComponent.propDecorators = {
        'toast': [{ type: Input },],
        'closeToastEvent': [{ type: Output, args: ['closeToast',] },],
    };
    return ToastComponent;
}());
export { ToastComponent };
