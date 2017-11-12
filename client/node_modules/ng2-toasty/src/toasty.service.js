// Copyright (C) 2016-2017 Sergey Akopkokhyants
// This project is licensed under the terms of the MIT license.
// https://github.com/akserg/ng2-toasty
import { Injectable } from '@angular/core';
import { isString, isNumber, isFunction } from './toasty.utils';
import { Subject } from 'rxjs/Subject';
/**
 * Options to configure specific Toast
 */
var ToastOptions = (function () {
    function ToastOptions() {
    }
    ToastOptions.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    ToastOptions.ctorParameters = function () { return []; };
    return ToastOptions;
}());
export { ToastOptions };
/**
 * Structrure of Toast
 */
var ToastData = (function () {
    function ToastData() {
    }
    ToastData.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    ToastData.ctorParameters = function () { return []; };
    return ToastData;
}());
export { ToastData };
/**
 * Default configuration foa all toats and toasty container
 */
var ToastyConfig = (function () {
    function ToastyConfig() {
        // Maximum number of toasties to show at once
        this.limit = 5;
        // Whether to show the 'X' icon to close the toast
        this.showClose = true;
        // The window position where the toast pops up
        this.position = 'bottom-right';
        // How long (in miliseconds) the toasty shows before it's removed. Set to null/0 to turn off.
        this.timeout = 5000;
        // What theme to use
        this.theme = 'default';
    }
    ToastyConfig.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    ToastyConfig.ctorParameters = function () { return []; };
    return ToastyConfig;
}());
export { ToastyConfig };
export var ToastyEventType;
(function (ToastyEventType) {
    ToastyEventType[ToastyEventType["ADD"] = 0] = "ADD";
    ToastyEventType[ToastyEventType["CLEAR"] = 1] = "CLEAR";
    ToastyEventType[ToastyEventType["CLEAR_ALL"] = 2] = "CLEAR_ALL";
})(ToastyEventType || (ToastyEventType = {}));
var ToastyEvent = (function () {
    function ToastyEvent(type, value) {
        this.type = type;
        this.value = value;
    }
    return ToastyEvent;
}());
export { ToastyEvent };
export function toastyServiceFactory(config) {
    return new ToastyService(config);
}
/**
 * Toasty service helps create different kinds of Toasts
 */
var ToastyService = (function () {
    function ToastyService(config) {
        this.config = config;
        // Init the counter
        this.uniqueCounter = 0;
        // ToastData event emitter
        // private toastsEmitter: EventEmitter<ToastData> = new EventEmitter<ToastData>();
        // Clear event emitter
        // private clearEmitter: EventEmitter<number> = new EventEmitter<number>();
        this.eventSource = new Subject();
        this.events = this.eventSource.asObservable();
    }
    /**
     * Get list of toats
     */
    // getToasts(): Observable<ToastData> {
    //   return this.toastsEmitter.asObservable();
    // }
    // getClear(): Observable<number> {
    //   return this.clearEmitter.asObservable();
    // }
    /**
     * Create Toast of a default type
     */
    ToastyService.prototype.default = function (options) {
        this.add(options, 'default');
    };
    /**
     * Create Toast of info type
     * @param  {object} options Individual toasty config overrides
     */
    ToastyService.prototype.info = function (options) {
        this.add(options, 'info');
    };
    /**
     * Create Toast of success type
     * @param  {object} options Individual toasty config overrides
     */
    ToastyService.prototype.success = function (options) {
        this.add(options, 'success');
    };
    /**
     * Create Toast of wait type
     * @param  {object} options Individual toasty config overrides
     */
    ToastyService.prototype.wait = function (options) {
        this.add(options, 'wait');
    };
    /**
     * Create Toast of error type
     * @param  {object} options Individual toasty config overrides
     */
    ToastyService.prototype.error = function (options) {
        this.add(options, 'error');
    };
    /**
     * Create Toast of warning type
     * @param  {object} options Individual toasty config overrides
     */
    ToastyService.prototype.warning = function (options) {
        this.add(options, 'warning');
    };
    // Add a new toast item
    ToastyService.prototype.add = function (options, type) {
        var toastyOptions;
        if (isString(options) && options !== '' || isNumber(options)) {
            toastyOptions = {
                title: options.toString()
            };
        }
        else {
            toastyOptions = options;
        }
        if (!toastyOptions || !toastyOptions.title && !toastyOptions.msg) {
            throw new Error('ng2-toasty: No toast title or message specified!');
        }
        type = type || 'default';
        // Set a unique counter for an id
        this.uniqueCounter++;
        // Set the local vs global config items
        var showClose = this._checkConfigItem(this.config, toastyOptions, 'showClose');
        // If we have a theme set, make sure it's a valid one
        var theme;
        if (toastyOptions.theme) {
            theme = ToastyService.THEMES.indexOf(toastyOptions.theme) > -1 ? toastyOptions.theme : this.config.theme;
        }
        else {
            theme = this.config.theme;
        }
        var toast = {
            id: this.uniqueCounter,
            title: toastyOptions.title,
            msg: toastyOptions.msg,
            showClose: showClose,
            type: 'toasty-type-' + type,
            theme: 'toasty-theme-' + theme,
            onAdd: toastyOptions.onAdd && isFunction(toastyOptions.onAdd) ? toastyOptions.onAdd : null,
            onRemove: toastyOptions.onRemove && isFunction(toastyOptions.onRemove) ? toastyOptions.onRemove : null
        };
        // If there's a timeout individually or globally, set the toast to timeout
        // Allows a caller to pass null/0 and override the default. Can also set the default to null/0 to turn off.
        toast.timeout = toastyOptions.hasOwnProperty('timeout') ? toastyOptions.timeout : this.config.timeout;
        // Push up a new toast item
        // this.toastsSubscriber.next(toast);
        // this.toastsEmitter.next(toast);
        this.emitEvent(new ToastyEvent(ToastyEventType.ADD, toast));
        // If we have a onAdd function, call it here
        if (toastyOptions.onAdd && isFunction(toastyOptions.onAdd)) {
            toastyOptions.onAdd.call(this, toast);
        }
    };
    // Clear all toasts
    ToastyService.prototype.clearAll = function () {
        // this.clearEmitter.next(null);
        this.emitEvent(new ToastyEvent(ToastyEventType.CLEAR_ALL));
    };
    // Clear the specific one
    ToastyService.prototype.clear = function (id) {
        // this.clearEmitter.next(id);
        this.emitEvent(new ToastyEvent(ToastyEventType.CLEAR, id));
    };
    // Checks whether the local option is set, if not,
    // checks the global config
    ToastyService.prototype._checkConfigItem = function (config, options, property) {
        if (options[property] === false) {
            return false;
        }
        else if (!options[property]) {
            return config[property];
        }
        else {
            return true;
        }
    };
    ToastyService.prototype.emitEvent = function (event) {
        if (this.eventSource) {
            // Push up a new event
            this.eventSource.next(event);
        }
    };
    // Allowed THEMES
    ToastyService.THEMES = ['default', 'material', 'bootstrap'];
    ToastyService.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    ToastyService.ctorParameters = function () { return [
        { type: ToastyConfig, },
    ]; };
    return ToastyService;
}());
export { ToastyService };
