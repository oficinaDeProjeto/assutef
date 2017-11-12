// Copyright (C) 2016-2017 Sergey Akopkokhyants
// This project is licensed under the terms of the MIT license.
// https://github.com/akserg/ng2-toasty
import { DomSanitizer } from '@angular/platform-browser';
import { Pipe } from '@angular/core';
var SafeHtmlPipe = (function () {
    function SafeHtmlPipe(domSanitized) {
        this.domSanitized = domSanitized;
    }
    SafeHtmlPipe.prototype.transform = function (value) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        return this.domSanitized.bypassSecurityTrustHtml(value);
    };
    SafeHtmlPipe.decorators = [
        { type: Pipe, args: [{ name: 'safeHtml' },] },
    ];
    /** @nocollapse */
    SafeHtmlPipe.ctorParameters = function () { return [
        { type: DomSanitizer, },
    ]; };
    return SafeHtmlPipe;
}());
export { SafeHtmlPipe };
