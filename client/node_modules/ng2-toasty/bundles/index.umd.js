(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("@angular/core"), require("@angular/common"), require("@angular/platform-browser"), require("rxjs/Subject"));
	else if(typeof define === 'function' && define.amd)
		define(["@angular/core", "@angular/common", "@angular/platform-browser", "rxjs/Subject"], factory);
	else if(typeof exports === 'object')
		exports["ng2-toasty"] = factory(require("@angular/core"), require("@angular/common"), require("@angular/platform-browser"), require("rxjs/Subject"));
	else
		root["ng2-toasty"] = factory(root["@angular/core"], root["@angular/common"], root["@angular/platform-browser"], root["rxjs/Subject"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_0__, __WEBPACK_EXTERNAL_MODULE_6__, __WEBPACK_EXTERNAL_MODULE_8__, __WEBPACK_EXTERNAL_MODULE_9__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 7);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_0__;

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ToastOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ToastData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return ToastyConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return ToastyEventType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return ToastyEvent; });
/* harmony export (immutable) */ __webpack_exports__["f"] = toastyServiceFactory;
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return ToastyService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__toasty_utils__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__);
// Copyright (C) 2016-2017 Sergey Akopkokhyants
// This project is licensed under the terms of the MIT license.
// https://github.com/akserg/ng2-toasty
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Options to configure specific Toast
 */
var ToastOptions = (function () {
    function ToastOptions() {
    }
    ToastOptions = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
    ], ToastOptions);
    return ToastOptions;
}());

/**
 * Structrure of Toast
 */
var ToastData = (function () {
    function ToastData() {
    }
    ToastData = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
    ], ToastData);
    return ToastData;
}());

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
    ToastyConfig = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
    ], ToastyConfig);
    return ToastyConfig;
}());

var ToastyEventType;
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

function toastyServiceFactory(config) {
    return new ToastyService(config);
}
/**
 * Toasty service helps create different kinds of Toasts
 */
var ToastyService = (function () {
    var ToastyService = ToastyService_1 = function ToastyService(config) {
        this.config = config;
        // Init the counter
        this.uniqueCounter = 0;
        // ToastData event emitter
        // private toastsEmitter: EventEmitter<ToastData> = new EventEmitter<ToastData>();
        // Clear event emitter
        // private clearEmitter: EventEmitter<number> = new EventEmitter<number>();
        this.eventSource = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__["Subject"]();
        this.events = this.eventSource.asObservable();
    };
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
        if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__toasty_utils__["b" /* isString */])(options) && options !== '' || __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__toasty_utils__["c" /* isNumber */])(options)) {
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
            theme = ToastyService_1.THEMES.indexOf(toastyOptions.theme) > -1 ? toastyOptions.theme : this.config.theme;
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
            onAdd: toastyOptions.onAdd && __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__toasty_utils__["a" /* isFunction */])(toastyOptions.onAdd) ? toastyOptions.onAdd : null,
            onRemove: toastyOptions.onRemove && __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__toasty_utils__["a" /* isFunction */])(toastyOptions.onRemove) ? toastyOptions.onRemove : null
        };
        // If there's a timeout individually or globally, set the toast to timeout
        // Allows a caller to pass null/0 and override the default. Can also set the default to null/0 to turn off.
        toast.timeout = toastyOptions.hasOwnProperty('timeout') ? toastyOptions.timeout : this.config.timeout;
        // Push up a new toast item
        // this.toastsSubscriber.next(toast);
        // this.toastsEmitter.next(toast);
        this.emitEvent(new ToastyEvent(ToastyEventType.ADD, toast));
        // If we have a onAdd function, call it here
        if (toastyOptions.onAdd && __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__toasty_utils__["a" /* isFunction */])(toastyOptions.onAdd)) {
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
    ToastyService = ToastyService_1 = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [ToastyConfig])
    ], ToastyService);
    return ToastyService;
    var ToastyService_1;
}());



/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SafeHtmlPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__angular_core__);
// Copyright (C) 2016-2017 Sergey Akopkokhyants
// This project is licensed under the terms of the MIT license.
// https://github.com/akserg/ng2-toasty
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


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
    SafeHtmlPipe = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Pipe"])({ name: 'safeHtml' }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["DomSanitizer"]])
    ], SafeHtmlPipe);
    return SafeHtmlPipe;
}());



/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ToastComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__toasty_service__ = __webpack_require__(1);
// Copyright (C) 2016-2017 Sergey Akopkokhyants
// This project is licensed under the terms of the MIT license.
// https://github.com/akserg/ng2-toasty
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * A Toast component shows message with title and close button.
 */
var ToastComponent = (function () {
    function ToastComponent() {
        this.closeToastEvent = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    /**
     * Event handler invokes when user clicks on close button.
     * This method emit new event into ToastyContainer to close it.
     */
    ToastComponent.prototype.close = function ($event) {
        $event.preventDefault();
        this.closeToastEvent.next(this.toast);
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__toasty_service__["b" /* ToastData */])
    ], ToastComponent.prototype, "toast", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])('closeToast'),
        __metadata("design:type", Object)
    ], ToastComponent.prototype, "closeToastEvent", void 0);
    ToastComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'ng2-toast',
            template: "\n        <div class=\"toast\" [ngClass]=\"[toast.type, toast.theme]\">\n            <div *ngIf=\"toast.showClose\" class=\"close-button\" (click)=\"close($event)\"></div>\n            <div *ngIf=\"toast.title || toast.msg\" class=\"toast-text\">\n                <span *ngIf=\"toast.title\" class=\"toast-title\" [innerHTML]=\"toast.title | safeHtml\"></span>\n                <br *ngIf=\"toast.title && toast.msg\" />\n                <span *ngIf=\"toast.msg\" class=\"toast-msg\" [innerHtml]=\"toast.msg | safeHtml\"></span>\n            </div>\n        </div>"
        })
    ], ToastComponent);
    return ToastComponent;
}());



/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ToastyComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__toasty_utils__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__toasty_service__ = __webpack_require__(1);
// Copyright (C) 2016-2017 Sergey Akopkokhyants
// This project is licensed under the terms of the MIT license.
// https://github.com/akserg/ng2-toasty
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Toasty is container for Toast components
 */
var ToastyComponent = (function () {
    var ToastyComponent = ToastyComponent_1 = function ToastyComponent(config, toastyService) {
        this.config = config;
        this.toastyService = toastyService;
        this._position = '';
        // The storage for toasts.
        this.toasts = [];
        // Initialise position
        this.position = '';
    };
    Object.defineProperty(ToastyComponent.prototype, "position", {
        get: function () {
            return this._position;
        },
        // The window position where the toast pops up. Possible values:
        // - bottom-right (default value from ToastConfig)
        // - bottom-left
        // - top-right
        // - top-left
        // - top-center
        // - bottom-center
        // - center-center
        set: function (value) {
            if (value) {
                var notFound = true;
                for (var i = 0; i < ToastyComponent_1.POSITIONS.length; i++) {
                    if (ToastyComponent_1.POSITIONS[i] === value) {
                        notFound = false;
                        break;
                    }
                }
                if (notFound) {
                    // Position was wrong - clear it here to use the one from config.
                    value = this.config.position;
                }
            }
            else {
                value = this.config.position;
            }
            this._position = 'toasty-position-' + value;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * `ngOnInit` is called right after the directive's data-bound properties have been checked for the
     * first time, and before any of its children have been checked. It is invoked only once when the
     * directive is instantiated.
     */
    ToastyComponent.prototype.ngOnInit = function () {
        var _this = this;
        // We listen events from our service
        this.toastyService.events.subscribe(function (event) {
            if (event.type === __WEBPACK_IMPORTED_MODULE_2__toasty_service__["d" /* ToastyEventType */].ADD) {
                // Add the new one
                var toast = event.value;
                _this.add(toast);
            }
            else if (event.type === __WEBPACK_IMPORTED_MODULE_2__toasty_service__["d" /* ToastyEventType */].CLEAR) {
                // Clear the one by number
                var id = event.value;
                _this.clear(id);
            }
            else if (event.type === __WEBPACK_IMPORTED_MODULE_2__toasty_service__["d" /* ToastyEventType */].CLEAR_ALL) {
                // Lets clear all toasts
                _this.clearAll();
            }
        });
    };
    /**
     * Event listener of 'closeToast' event comes from ToastyComponent.
     * This method removes ToastComponent assosiated with this Toast.
     */
    ToastyComponent.prototype.closeToast = function (toast) {
        this.clear(toast.id);
    };
    /**
     * Add new Toast
     */
    ToastyComponent.prototype.add = function (toast) {
        // If we've gone over our limit, remove the earliest
        // one from the array
        if (this.toasts.length >= this.config.limit) {
            this.toasts.shift();
        }
        // Add toasty to array
        this.toasts.push(toast);
        //
        // If there's a timeout individually or globally,
        // set the toast to timeout
        if (toast.timeout) {
            this._setTimeout(toast);
        }
    };
    /**
     * Clear individual toast by id
     * @param id is unique identifier of Toast
     */
    ToastyComponent.prototype.clear = function (id) {
        var _this = this;
        if (id) {
            this.toasts.forEach(function (value, key) {
                if (value.id === id) {
                    if (value.onRemove && __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__toasty_utils__["a" /* isFunction */])(value.onRemove)) {
                        value.onRemove.call(_this, value);
                    }
                    _this.toasts.splice(key, 1);
                }
            });
        }
        else {
            throw new Error('Please provide id of Toast to close');
        }
    };
    /**
     * Clear all toasts
     */
    ToastyComponent.prototype.clearAll = function () {
        var _this = this;
        this.toasts.forEach(function (value, key) {
            if (value.onRemove && __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__toasty_utils__["a" /* isFunction */])(value.onRemove)) {
                value.onRemove.call(_this, value);
            }
        });
        this.toasts = [];
    };
    /**
     * Custom setTimeout function for specific setTimeouts on individual toasts.
     */
    ToastyComponent.prototype._setTimeout = function (toast) {
        var _this = this;
        window.setTimeout(function () {
            _this.clear(toast.id);
        }, toast.timeout);
    };
    /**
     * Set of constants defins position of Toasty on the page.
     */
    ToastyComponent.POSITIONS = ['bottom-right', 'bottom-left', 'top-right', 'top-left', 'top-center', 'bottom-center', 'center-center'];
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String),
        __metadata("design:paramtypes", [String])
    ], ToastyComponent.prototype, "position", null);
    ToastyComponent = ToastyComponent_1 = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'ng2-toasty',
            template: "\n    <div id=\"toasty\" [ngClass]=\"[position]\">\n        <ng2-toast *ngFor=\"let toast of toasts\" [toast]=\"toast\" (closeToast)=\"closeToast(toast)\"></ng2-toast>\n    </div>"
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__toasty_service__["c" /* ToastyConfig */], __WEBPACK_IMPORTED_MODULE_2__toasty_service__["g" /* ToastyService */]])
    ], ToastyComponent);
    return ToastyComponent;
    var ToastyComponent_1;
}());



/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["b"] = isString;
/* harmony export (immutable) */ __webpack_exports__["c"] = isNumber;
/* harmony export (immutable) */ __webpack_exports__["a"] = isFunction;
// Copyright (C) 2016-2017 Sergey Akopkokhyants
// This project is licensed under the terms of the MIT license.
// https://github.com/akserg/ng2-toasty
/**
 * Check and return true if an object is type of string
 * @param obj Analyse has to object the string type
 * @return result of analysis
 */
function isString(obj) {
    return typeof obj === "string";
}
/**
 * Check and return true if an object is type of number
 * @param obj Analyse has to object the boolean type
 * @return result of analysis
 */
function isNumber(obj) {
    return typeof obj === "number";
}
/**
 * Check and return true if an object is type of Function
 * @param obj Analyse has to object the function type
 * @return result of analysis
 */
function isFunction(obj) {
    return typeof obj === "function";
}


/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_6__;

/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "providers", function() { return providers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToastyModule", function() { return ToastyModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__angular_common__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__src_toasty_service__ = __webpack_require__(1);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "ToastOptions", function() { return __WEBPACK_IMPORTED_MODULE_2__src_toasty_service__["a"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "ToastData", function() { return __WEBPACK_IMPORTED_MODULE_2__src_toasty_service__["b"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "ToastyConfig", function() { return __WEBPACK_IMPORTED_MODULE_2__src_toasty_service__["c"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "ToastyEventType", function() { return __WEBPACK_IMPORTED_MODULE_2__src_toasty_service__["d"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "ToastyEvent", function() { return __WEBPACK_IMPORTED_MODULE_2__src_toasty_service__["e"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "toastyServiceFactory", function() { return __WEBPACK_IMPORTED_MODULE_2__src_toasty_service__["f"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "ToastyService", function() { return __WEBPACK_IMPORTED_MODULE_2__src_toasty_service__["g"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__src_toasty_component__ = __webpack_require__(4);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "ToastyComponent", function() { return __WEBPACK_IMPORTED_MODULE_3__src_toasty_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__src_toast_component__ = __webpack_require__(3);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "ToastComponent", function() { return __WEBPACK_IMPORTED_MODULE_4__src_toast_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__src_shared__ = __webpack_require__(2);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "SafeHtmlPipe", function() { return __WEBPACK_IMPORTED_MODULE_5__src_shared__["a"]; });
// Copyright (C) 2016-2017 Sergey Akopkokhyants
// This project is licensed under the terms of the MIT license.
// https://github.com/akserg/ng2-toasty
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var providers = [
    __WEBPACK_IMPORTED_MODULE_2__src_toasty_service__["c" /* ToastyConfig */],
    { provide: __WEBPACK_IMPORTED_MODULE_2__src_toasty_service__["g" /* ToastyService */], useFactory: __WEBPACK_IMPORTED_MODULE_2__src_toasty_service__["f" /* toastyServiceFactory */], deps: [__WEBPACK_IMPORTED_MODULE_2__src_toasty_service__["c" /* ToastyConfig */]] }
];
var ToastyModule = (function () {
    var ToastyModule = ToastyModule_1 = function ToastyModule() {
    };
    ToastyModule.forRoot = function () {
        return {
            ngModule: ToastyModule_1,
            providers: providers
        };
    };
    ToastyModule = ToastyModule_1 = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"]],
            declarations: [__WEBPACK_IMPORTED_MODULE_4__src_toast_component__["a" /* ToastComponent */], __WEBPACK_IMPORTED_MODULE_3__src_toasty_component__["a" /* ToastyComponent */], __WEBPACK_IMPORTED_MODULE_5__src_shared__["a" /* SafeHtmlPipe */]],
            exports: [__WEBPACK_IMPORTED_MODULE_4__src_toast_component__["a" /* ToastComponent */], __WEBPACK_IMPORTED_MODULE_3__src_toasty_component__["a" /* ToastyComponent */]],
            providers: providers
        })
    ], ToastyModule);
    return ToastyModule;
    var ToastyModule_1;
}());



/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_8__;

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_9__;

/***/ })
/******/ ]);
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCA4MDg2M2I0ZDlmNzdmMTViOTUwNyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAYW5ndWxhci9jb3JlXCIiLCJ3ZWJwYWNrOi8vLy4vc3JjL3RvYXN0eS5zZXJ2aWNlLnRzIiwid2VicGFjazovLy8uL3NyYy9zaGFyZWQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3RvYXN0LmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdG9hc3R5LmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdG9hc3R5LnV0aWxzLnRzIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBhbmd1bGFyL2NvbW1vblwiIiwid2VicGFjazovLy8uL2luZGV4LnRzIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyeGpzL1N1YmplY3RcIiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsTztBQ1ZBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxtREFBMkMsY0FBYzs7QUFFekQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFF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QWUsRUFBRSxpRUFBWSxDQUFDO1lBQzdELE9BQU8sRUFBRSxDQUFFLDRFQUFjLEVBQUUsOEVBQWUsQ0FBQztZQUMzQyxTQUFTLEVBQUUsU0FBUztTQUN2QixDQUFDO09BQ1csWUFBWSxDQU94QjtJQUFELG1CQUFDOztDQUFBO0FBUHdCOzs7Ozs7O0FDNUJ6QiwrQzs7Ozs7O0FDQUEsK0MiLCJmaWxlIjoiaW5kZXgudW1kLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeShyZXF1aXJlKFwiQGFuZ3VsYXIvY29yZVwiKSwgcmVxdWlyZShcIkBhbmd1bGFyL2NvbW1vblwiKSwgcmVxdWlyZShcIkBhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXJcIiksIHJlcXVpcmUoXCJyeGpzL1N1YmplY3RcIikpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW1wiQGFuZ3VsYXIvY29yZVwiLCBcIkBhbmd1bGFyL2NvbW1vblwiLCBcIkBhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXJcIiwgXCJyeGpzL1N1YmplY3RcIl0sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wibmcyLXRvYXN0eVwiXSA9IGZhY3RvcnkocmVxdWlyZShcIkBhbmd1bGFyL2NvcmVcIiksIHJlcXVpcmUoXCJAYW5ndWxhci9jb21tb25cIiksIHJlcXVpcmUoXCJAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyXCIpLCByZXF1aXJlKFwicnhqcy9TdWJqZWN0XCIpKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJuZzItdG9hc3R5XCJdID0gZmFjdG9yeShyb290W1wiQGFuZ3VsYXIvY29yZVwiXSwgcm9vdFtcIkBhbmd1bGFyL2NvbW1vblwiXSwgcm9vdFtcIkBhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXJcIl0sIHJvb3RbXCJyeGpzL1N1YmplY3RcIl0pO1xufSkodGhpcywgZnVuY3Rpb24oX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV8wX18sIF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfNl9fLCBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzhfXywgX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV85X18pIHtcbnJldHVybiBcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gaWRlbnRpdHkgZnVuY3Rpb24gZm9yIGNhbGxpbmcgaGFybW9ueSBpbXBvcnRzIHdpdGggdGhlIGNvcnJlY3QgY29udGV4dFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5pID0gZnVuY3Rpb24odmFsdWUpIHsgcmV0dXJuIHZhbHVlOyB9O1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gNyk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgODA4NjNiNGQ5Zjc3ZjE1Yjk1MDciLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfMF9fO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiQGFuZ3VsYXIvY29yZVwiXG4vLyBtb2R1bGUgaWQgPSAwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIENvcHlyaWdodCAoQykgMjAxNi0yMDE3IFNlcmdleSBBa29wa29raHlhbnRzXG4vLyBUaGlzIHByb2plY3QgaXMgbGljZW5zZWQgdW5kZXIgdGhlIHRlcm1zIG9mIHRoZSBNSVQgbGljZW5zZS5cbi8vIGh0dHBzOi8vZ2l0aHViLmNvbS9ha3NlcmcvbmcyLXRvYXN0eVxuXG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBpc1N0cmluZywgaXNOdW1iZXIsIGlzRnVuY3Rpb24gfSBmcm9tICcuL3RvYXN0eS51dGlscyc7XG5cbmltcG9ydCB7U3ViamVjdH0gZnJvbSAncnhqcy9TdWJqZWN0JztcbmltcG9ydCB7T2JzZXJ2YWJsZX0gZnJvbSAncnhqcy9PYnNlcnZhYmxlJztcblxuLyoqXG4gKiBPcHRpb25zIHRvIGNvbmZpZ3VyZSBzcGVjaWZpYyBUb2FzdFxuICovXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgVG9hc3RPcHRpb25zIHtcbiAgdGl0bGU6IHN0cmluZztcbiAgbXNnPzogc3RyaW5nO1xuICBzaG93Q2xvc2U/OiBib29sZWFuO1xuICB0aGVtZT86IHN0cmluZztcbiAgdGltZW91dD86IG51bWJlcjtcbiAgb25BZGQ/OiBGdW5jdGlvbjtcbiAgb25SZW1vdmU/OiBGdW5jdGlvbjtcbn1cblxuLyoqXG4gKiBTdHJ1Y3RydXJlIG9mIFRvYXN0XG4gKi9cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBUb2FzdERhdGEge1xuICBpZDogbnVtYmVyO1xuICB0aXRsZTogc3RyaW5nO1xuICBtc2c6IHN0cmluZztcbiAgc2hvd0Nsb3NlOiBib29sZWFuO1xuICB0eXBlOiBzdHJpbmc7XG4gIHRoZW1lOiBzdHJpbmc7XG4gIHRpbWVvdXQ6IG51bWJlcjtcbiAgb25BZGQ6IEZ1bmN0aW9uO1xuICBvblJlbW92ZTogRnVuY3Rpb247XG4gIG9uQ2xpY2s6IEZ1bmN0aW9uO1xufVxuXG4vKipcbiAqIERlZmF1bHQgY29uZmlndXJhdGlvbiBmb2EgYWxsIHRvYXRzIGFuZCB0b2FzdHkgY29udGFpbmVyXG4gKi9cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBUb2FzdHlDb25maWcge1xuXG4gIC8vIE1heGltdW0gbnVtYmVyIG9mIHRvYXN0aWVzIHRvIHNob3cgYXQgb25jZVxuICBsaW1pdDogbnVtYmVyID0gNTtcblxuICAvLyBXaGV0aGVyIHRvIHNob3cgdGhlICdYJyBpY29uIHRvIGNsb3NlIHRoZSB0b2FzdFxuICBzaG93Q2xvc2U6IGJvb2xlYW4gPSB0cnVlO1xuXG4gIC8vIFRoZSB3aW5kb3cgcG9zaXRpb24gd2hlcmUgdGhlIHRvYXN0IHBvcHMgdXBcbiAgcG9zaXRpb246ICdib3R0b20tcmlnaHQnIHwgJ2JvdHRvbS1sZWZ0JyB8ICd0b3AtcmlnaHQnIHwgJ3RvcC1sZWZ0JyB8ICd0b3AtY2VudGVyJyB8ICdib3R0b20tY2VudGVyJyB8ICdjZW50ZXItY2VudGVyJyA9ICdib3R0b20tcmlnaHQnO1xuXG4gIC8vIEhvdyBsb25nIChpbiBtaWxpc2Vjb25kcykgdGhlIHRvYXN0eSBzaG93cyBiZWZvcmUgaXQncyByZW1vdmVkLiBTZXQgdG8gbnVsbC8wIHRvIHR1cm4gb2ZmLlxuICB0aW1lb3V0OiBudW1iZXIgPSA1MDAwO1xuXG4gIC8vIFdoYXQgdGhlbWUgdG8gdXNlXG4gIHRoZW1lOiAnZGVmYXVsdCcgfCAnbWF0ZXJpYWwnIHwgJ2Jvb3RzdHJhcCcgPSAnZGVmYXVsdCc7XG59XG5cbmV4cG9ydCBlbnVtIFRvYXN0eUV2ZW50VHlwZSB7XG4gIEFERCxcbiAgQ0xFQVIsXG4gIENMRUFSX0FMTFxufVxuXG5leHBvcnQgY2xhc3MgVG9hc3R5RXZlbnQge1xuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyB0eXBlOlRvYXN0eUV2ZW50VHlwZSwgcHVibGljIHZhbHVlPzphbnkpIHt9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0b2FzdHlTZXJ2aWNlRmFjdG9yeShjb25maWc6IFRvYXN0eUNvbmZpZyk6IFRvYXN0eVNlcnZpY2UgIHtcbiAgICByZXR1cm4gbmV3IFRvYXN0eVNlcnZpY2UoY29uZmlnKTtcbn1cblxuLyoqXG4gKiBUb2FzdHkgc2VydmljZSBoZWxwcyBjcmVhdGUgZGlmZmVyZW50IGtpbmRzIG9mIFRvYXN0c1xuICovXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgVG9hc3R5U2VydmljZSB7XG4gIC8vIEFsbG93ZWQgVEhFTUVTXG4gIHN0YXRpYyBUSEVNRVM6IEFycmF5PHN0cmluZz4gPSBbJ2RlZmF1bHQnLCAnbWF0ZXJpYWwnLCAnYm9vdHN0cmFwJ107XG4gIC8vIEluaXQgdGhlIGNvdW50ZXJcbiAgdW5pcXVlQ291bnRlcjogbnVtYmVyID0gMDtcbiAgLy8gVG9hc3REYXRhIGV2ZW50IGVtaXR0ZXJcbiAgLy8gcHJpdmF0ZSB0b2FzdHNFbWl0dGVyOiBFdmVudEVtaXR0ZXI8VG9hc3REYXRhPiA9IG5ldyBFdmVudEVtaXR0ZXI8VG9hc3REYXRhPigpO1xuICAvLyBDbGVhciBldmVudCBlbWl0dGVyXG4gIC8vIHByaXZhdGUgY2xlYXJFbWl0dGVyOiBFdmVudEVtaXR0ZXI8bnVtYmVyPiA9IG5ldyBFdmVudEVtaXR0ZXI8bnVtYmVyPigpO1xuXG4gIHByaXZhdGUgZXZlbnRTb3VyY2U6IFN1YmplY3Q8VG9hc3R5RXZlbnQ+ID0gbmV3IFN1YmplY3Q8VG9hc3R5RXZlbnQ+KCk7XG4gIHB1YmxpYyBldmVudHM6IE9ic2VydmFibGU8VG9hc3R5RXZlbnQ+ID0gdGhpcy5ldmVudFNvdXJjZS5hc09ic2VydmFibGUoKTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGNvbmZpZzogVG9hc3R5Q29uZmlnKSB7fVxuXG4gIC8qKlxuICAgKiBHZXQgbGlzdCBvZiB0b2F0c1xuICAgKi9cbiAgLy8gZ2V0VG9hc3RzKCk6IE9ic2VydmFibGU8VG9hc3REYXRhPiB7XG4gIC8vICAgcmV0dXJuIHRoaXMudG9hc3RzRW1pdHRlci5hc09ic2VydmFibGUoKTtcbiAgLy8gfVxuXG4gIC8vIGdldENsZWFyKCk6IE9ic2VydmFibGU8bnVtYmVyPiB7XG4gIC8vICAgcmV0dXJuIHRoaXMuY2xlYXJFbWl0dGVyLmFzT2JzZXJ2YWJsZSgpO1xuICAvLyB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZSBUb2FzdCBvZiBhIGRlZmF1bHQgdHlwZVxuICAgKi9cbiAgZGVmYXVsdChvcHRpb25zOiBUb2FzdE9wdGlvbnN8c3RyaW5nfG51bWJlcik6IHZvaWQge1xuICAgIHRoaXMuYWRkKG9wdGlvbnMsICdkZWZhdWx0Jyk7XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlIFRvYXN0IG9mIGluZm8gdHlwZVxuICAgKiBAcGFyYW0gIHtvYmplY3R9IG9wdGlvbnMgSW5kaXZpZHVhbCB0b2FzdHkgY29uZmlnIG92ZXJyaWRlc1xuICAgKi9cbiAgaW5mbyhvcHRpb25zOiBUb2FzdE9wdGlvbnN8c3RyaW5nfG51bWJlcik6IHZvaWQge1xuICAgIHRoaXMuYWRkKG9wdGlvbnMsICdpbmZvJyk7XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlIFRvYXN0IG9mIHN1Y2Nlc3MgdHlwZVxuICAgKiBAcGFyYW0gIHtvYmplY3R9IG9wdGlvbnMgSW5kaXZpZHVhbCB0b2FzdHkgY29uZmlnIG92ZXJyaWRlc1xuICAgKi9cbiAgc3VjY2VzcyhvcHRpb25zOiBUb2FzdE9wdGlvbnN8c3RyaW5nfG51bWJlcik6IHZvaWQge1xuICAgIHRoaXMuYWRkKG9wdGlvbnMsICdzdWNjZXNzJyk7XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlIFRvYXN0IG9mIHdhaXQgdHlwZVxuICAgKiBAcGFyYW0gIHtvYmplY3R9IG9wdGlvbnMgSW5kaXZpZHVhbCB0b2FzdHkgY29uZmlnIG92ZXJyaWRlc1xuICAgKi9cbiAgd2FpdChvcHRpb25zOiBUb2FzdE9wdGlvbnN8c3RyaW5nfG51bWJlcik6IHZvaWQge1xuICAgIHRoaXMuYWRkKG9wdGlvbnMsICd3YWl0Jyk7XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlIFRvYXN0IG9mIGVycm9yIHR5cGVcbiAgICogQHBhcmFtICB7b2JqZWN0fSBvcHRpb25zIEluZGl2aWR1YWwgdG9hc3R5IGNvbmZpZyBvdmVycmlkZXNcbiAgICovXG4gIGVycm9yKG9wdGlvbnM6IFRvYXN0T3B0aW9uc3xzdHJpbmd8bnVtYmVyKTogdm9pZCB7XG4gICAgdGhpcy5hZGQob3B0aW9ucywgJ2Vycm9yJyk7XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlIFRvYXN0IG9mIHdhcm5pbmcgdHlwZVxuICAgKiBAcGFyYW0gIHtvYmplY3R9IG9wdGlvbnMgSW5kaXZpZHVhbCB0b2FzdHkgY29uZmlnIG92ZXJyaWRlc1xuICAgKi9cbiAgd2FybmluZyhvcHRpb25zOiBUb2FzdE9wdGlvbnN8c3RyaW5nfG51bWJlcik6IHZvaWQge1xuICAgIHRoaXMuYWRkKG9wdGlvbnMsICd3YXJuaW5nJyk7XG4gIH1cblxuXG4gIC8vIEFkZCBhIG5ldyB0b2FzdCBpdGVtXG4gIHByaXZhdGUgYWRkKG9wdGlvbnM6IFRvYXN0T3B0aW9uc3xzdHJpbmd8bnVtYmVyLCB0eXBlOiBzdHJpbmcpIHtcbiAgICBsZXQgdG9hc3R5T3B0aW9uczogVG9hc3RPcHRpb25zO1xuXG4gICAgaWYgKGlzU3RyaW5nKG9wdGlvbnMpICYmIG9wdGlvbnMgIT09ICcnIHx8IGlzTnVtYmVyKG9wdGlvbnMpKSB7XG4gICAgICB0b2FzdHlPcHRpb25zID0gPFRvYXN0T3B0aW9ucz57XG4gICAgICAgIHRpdGxlOiBvcHRpb25zLnRvU3RyaW5nKClcbiAgICAgIH07XG4gICAgfSBlbHNlIHtcbiAgICAgIHRvYXN0eU9wdGlvbnMgPSA8VG9hc3RPcHRpb25zPm9wdGlvbnM7XG4gICAgfVxuXG4gICAgaWYgKCF0b2FzdHlPcHRpb25zIHx8ICF0b2FzdHlPcHRpb25zLnRpdGxlICYmICF0b2FzdHlPcHRpb25zLm1zZykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCduZzItdG9hc3R5OiBObyB0b2FzdCB0aXRsZSBvciBtZXNzYWdlIHNwZWNpZmllZCEnKTtcbiAgICB9XG5cbiAgICB0eXBlID0gdHlwZSB8fCAnZGVmYXVsdCc7XG5cbiAgICAvLyBTZXQgYSB1bmlxdWUgY291bnRlciBmb3IgYW4gaWRcbiAgICB0aGlzLnVuaXF1ZUNvdW50ZXIrKztcblxuICAgIC8vIFNldCB0aGUgbG9jYWwgdnMgZ2xvYmFsIGNvbmZpZyBpdGVtc1xuICAgIGxldCBzaG93Q2xvc2UgPSB0aGlzLl9jaGVja0NvbmZpZ0l0ZW0odGhpcy5jb25maWcsIHRvYXN0eU9wdGlvbnMsICdzaG93Q2xvc2UnKTtcblxuICAgIC8vIElmIHdlIGhhdmUgYSB0aGVtZSBzZXQsIG1ha2Ugc3VyZSBpdCdzIGEgdmFsaWQgb25lXG4gICAgbGV0IHRoZW1lOiBzdHJpbmc7XG4gICAgaWYgKHRvYXN0eU9wdGlvbnMudGhlbWUpIHtcbiAgICAgIHRoZW1lID0gVG9hc3R5U2VydmljZS5USEVNRVMuaW5kZXhPZih0b2FzdHlPcHRpb25zLnRoZW1lKSA+IC0xID8gdG9hc3R5T3B0aW9ucy50aGVtZSA6IHRoaXMuY29uZmlnLnRoZW1lO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGVtZSA9IHRoaXMuY29uZmlnLnRoZW1lO1xuICAgIH1cblxuICAgIGxldCB0b2FzdDogVG9hc3REYXRhID0gPFRvYXN0RGF0YT57XG4gICAgICBpZCAgICAgICA6IHRoaXMudW5pcXVlQ291bnRlcixcbiAgICAgIHRpdGxlICAgIDogdG9hc3R5T3B0aW9ucy50aXRsZSxcbiAgICAgIG1zZyAgICAgIDogdG9hc3R5T3B0aW9ucy5tc2csXG4gICAgICBzaG93Q2xvc2U6IHNob3dDbG9zZSxcbiAgICAgIHR5cGUgICAgIDogJ3RvYXN0eS10eXBlLScgKyB0eXBlLFxuICAgICAgdGhlbWUgICAgOiAndG9hc3R5LXRoZW1lLScgKyB0aGVtZSxcbiAgICAgIG9uQWRkICAgIDogdG9hc3R5T3B0aW9ucy5vbkFkZCAmJiBpc0Z1bmN0aW9uKHRvYXN0eU9wdGlvbnMub25BZGQpID8gdG9hc3R5T3B0aW9ucy5vbkFkZCA6IG51bGwsXG4gICAgICBvblJlbW92ZSA6IHRvYXN0eU9wdGlvbnMub25SZW1vdmUgJiYgaXNGdW5jdGlvbih0b2FzdHlPcHRpb25zLm9uUmVtb3ZlKSA/IHRvYXN0eU9wdGlvbnMub25SZW1vdmUgOiBudWxsXG4gICAgfTtcblxuICAgIC8vIElmIHRoZXJlJ3MgYSB0aW1lb3V0IGluZGl2aWR1YWxseSBvciBnbG9iYWxseSwgc2V0IHRoZSB0b2FzdCB0byB0aW1lb3V0XG4gICAgLy8gQWxsb3dzIGEgY2FsbGVyIHRvIHBhc3MgbnVsbC8wIGFuZCBvdmVycmlkZSB0aGUgZGVmYXVsdC4gQ2FuIGFsc28gc2V0IHRoZSBkZWZhdWx0IHRvIG51bGwvMCB0byB0dXJuIG9mZi5cbiAgICB0b2FzdC50aW1lb3V0ID0gdG9hc3R5T3B0aW9ucy5oYXNPd25Qcm9wZXJ0eSgndGltZW91dCcpID8gdG9hc3R5T3B0aW9ucy50aW1lb3V0IDogdGhpcy5jb25maWcudGltZW91dDtcblxuICAgIC8vIFB1c2ggdXAgYSBuZXcgdG9hc3QgaXRlbVxuICAgIC8vIHRoaXMudG9hc3RzU3Vic2NyaWJlci5uZXh0KHRvYXN0KTtcbiAgICAvLyB0aGlzLnRvYXN0c0VtaXR0ZXIubmV4dCh0b2FzdCk7XG4gICAgdGhpcy5lbWl0RXZlbnQobmV3IFRvYXN0eUV2ZW50KFRvYXN0eUV2ZW50VHlwZS5BREQsIHRvYXN0KSk7XG4gICAgLy8gSWYgd2UgaGF2ZSBhIG9uQWRkIGZ1bmN0aW9uLCBjYWxsIGl0IGhlcmVcbiAgICBpZiAodG9hc3R5T3B0aW9ucy5vbkFkZCAmJiBpc0Z1bmN0aW9uKHRvYXN0eU9wdGlvbnMub25BZGQpKSB7XG4gICAgICB0b2FzdHlPcHRpb25zLm9uQWRkLmNhbGwodGhpcywgdG9hc3QpO1xuICAgIH1cbiAgfVxuXG4gIC8vIENsZWFyIGFsbCB0b2FzdHNcbiAgY2xlYXJBbGwoKSB7XG4gICAgLy8gdGhpcy5jbGVhckVtaXR0ZXIubmV4dChudWxsKTtcbiAgICB0aGlzLmVtaXRFdmVudChuZXcgVG9hc3R5RXZlbnQoVG9hc3R5RXZlbnRUeXBlLkNMRUFSX0FMTCkpO1xuICB9XG5cbiAgLy8gQ2xlYXIgdGhlIHNwZWNpZmljIG9uZVxuICBjbGVhcihpZDogbnVtYmVyKSB7XG4gICAgLy8gdGhpcy5jbGVhckVtaXR0ZXIubmV4dChpZCk7XG4gICAgdGhpcy5lbWl0RXZlbnQobmV3IFRvYXN0eUV2ZW50KFRvYXN0eUV2ZW50VHlwZS5DTEVBUiwgaWQpKTtcbiAgfVxuXG4gIC8vIENoZWNrcyB3aGV0aGVyIHRoZSBsb2NhbCBvcHRpb24gaXMgc2V0LCBpZiBub3QsXG4gIC8vIGNoZWNrcyB0aGUgZ2xvYmFsIGNvbmZpZ1xuICBwcml2YXRlIF9jaGVja0NvbmZpZ0l0ZW0oY29uZmlnOiBhbnksIG9wdGlvbnM6IGFueSwgcHJvcGVydHk6IHN0cmluZykge1xuICAgIGlmIChvcHRpb25zW3Byb3BlcnR5XSA9PT0gZmFsc2UpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9IGVsc2UgaWYgKCFvcHRpb25zW3Byb3BlcnR5XSkge1xuICAgICAgcmV0dXJuIGNvbmZpZ1twcm9wZXJ0eV07XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgZW1pdEV2ZW50KGV2ZW50OiBUb2FzdHlFdmVudCkge1xuICAgICAgICBpZiAodGhpcy5ldmVudFNvdXJjZSkge1xuICAgICAgICAgICAgLy8gUHVzaCB1cCBhIG5ldyBldmVudFxuICAgICAgICAgICAgdGhpcy5ldmVudFNvdXJjZS5uZXh0KGV2ZW50KTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vdHNsaW50LWxvYWRlciEuL3NyYy90b2FzdHkuc2VydmljZS50cyIsIi8vIENvcHlyaWdodCAoQykgMjAxNi0yMDE3IFNlcmdleSBBa29wa29raHlhbnRzXG4vLyBUaGlzIHByb2plY3QgaXMgbGljZW5zZWQgdW5kZXIgdGhlIHRlcm1zIG9mIHRoZSBNSVQgbGljZW5zZS5cbi8vIGh0dHBzOi8vZ2l0aHViLmNvbS9ha3NlcmcvbmcyLXRvYXN0eVxuXG5pbXBvcnQgeyBEb21TYW5pdGl6ZXIgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcbmltcG9ydCB7IFBpcGVUcmFuc2Zvcm0sIFBpcGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQFBpcGUoeyBuYW1lOiAnc2FmZUh0bWwnfSlcbmV4cG9ydCBjbGFzcyBTYWZlSHRtbFBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtICB7XG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBkb21TYW5pdGl6ZWQ6IERvbVNhbml0aXplcikge31cblxuICAgIHRyYW5zZm9ybSh2YWx1ZTogYW55LCAuLi5hcmdzOiBhbnlbXSk6IGFueSB7XG4gICAgICAgIHJldHVybiB0aGlzLmRvbVNhbml0aXplZC5ieXBhc3NTZWN1cml0eVRydXN0SHRtbCh2YWx1ZSk7XG4gICAgfVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vdHNsaW50LWxvYWRlciEuL3NyYy9zaGFyZWQudHMiLCIvLyBDb3B5cmlnaHQgKEMpIDIwMTYtMjAxNyBTZXJnZXkgQWtvcGtva2h5YW50c1xuLy8gVGhpcyBwcm9qZWN0IGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSB0ZXJtcyBvZiB0aGUgTUlUIGxpY2Vuc2UuXG4vLyBodHRwczovL2dpdGh1Yi5jb20vYWtzZXJnL25nMi10b2FzdHlcblxuaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgVG9hc3REYXRhIH0gZnJvbSAnLi90b2FzdHkuc2VydmljZSc7XG5cbi8qKlxuICogQSBUb2FzdCBjb21wb25lbnQgc2hvd3MgbWVzc2FnZSB3aXRoIHRpdGxlIGFuZCBjbG9zZSBidXR0b24uXG4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ25nMi10b2FzdCcsXG4gIHRlbXBsYXRlOiBgXG4gICAgICAgIDxkaXYgY2xhc3M9XCJ0b2FzdFwiIFtuZ0NsYXNzXT1cIlt0b2FzdC50eXBlLCB0b2FzdC50aGVtZV1cIj5cbiAgICAgICAgICAgIDxkaXYgKm5nSWY9XCJ0b2FzdC5zaG93Q2xvc2VcIiBjbGFzcz1cImNsb3NlLWJ1dHRvblwiIChjbGljayk9XCJjbG9zZSgkZXZlbnQpXCI+PC9kaXY+XG4gICAgICAgICAgICA8ZGl2ICpuZ0lmPVwidG9hc3QudGl0bGUgfHwgdG9hc3QubXNnXCIgY2xhc3M9XCJ0b2FzdC10ZXh0XCI+XG4gICAgICAgICAgICAgICAgPHNwYW4gKm5nSWY9XCJ0b2FzdC50aXRsZVwiIGNsYXNzPVwidG9hc3QtdGl0bGVcIiBbaW5uZXJIVE1MXT1cInRvYXN0LnRpdGxlIHwgc2FmZUh0bWxcIj48L3NwYW4+XG4gICAgICAgICAgICAgICAgPGJyICpuZ0lmPVwidG9hc3QudGl0bGUgJiYgdG9hc3QubXNnXCIgLz5cbiAgICAgICAgICAgICAgICA8c3BhbiAqbmdJZj1cInRvYXN0Lm1zZ1wiIGNsYXNzPVwidG9hc3QtbXNnXCIgW2lubmVySHRtbF09XCJ0b2FzdC5tc2cgfCBzYWZlSHRtbFwiPjwvc3Bhbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5gXG59KVxuZXhwb3J0IGNsYXNzIFRvYXN0Q29tcG9uZW50IHtcblxuICBASW5wdXQoKSB0b2FzdDogVG9hc3REYXRhO1xuICBAT3V0cHV0KCdjbG9zZVRvYXN0JykgY2xvc2VUb2FzdEV2ZW50ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gIC8qKlxuICAgKiBFdmVudCBoYW5kbGVyIGludm9rZXMgd2hlbiB1c2VyIGNsaWNrcyBvbiBjbG9zZSBidXR0b24uXG4gICAqIFRoaXMgbWV0aG9kIGVtaXQgbmV3IGV2ZW50IGludG8gVG9hc3R5Q29udGFpbmVyIHRvIGNsb3NlIGl0LlxuICAgKi9cbiAgY2xvc2UoJGV2ZW50OiBhbnkpIHtcbiAgICAkZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICB0aGlzLmNsb3NlVG9hc3RFdmVudC5uZXh0KHRoaXMudG9hc3QpO1xuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L3RzbGludC1sb2FkZXIhLi9zcmMvdG9hc3QuY29tcG9uZW50LnRzIiwiLy8gQ29weXJpZ2h0IChDKSAyMDE2LTIwMTcgU2VyZ2V5IEFrb3Brb2toeWFudHNcbi8vIFRoaXMgcHJvamVjdCBpcyBsaWNlbnNlZCB1bmRlciB0aGUgdGVybXMgb2YgdGhlIE1JVCBsaWNlbnNlLlxuLy8gaHR0cHM6Ly9naXRodWIuY29tL2Frc2VyZy9uZzItdG9hc3R5XG5cbmltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBpc0Z1bmN0aW9uIH0gZnJvbSAnLi90b2FzdHkudXRpbHMnO1xuaW1wb3J0IHsgVG9hc3R5U2VydmljZSwgVG9hc3REYXRhLCBUb2FzdHlDb25maWcsIFRvYXN0eUV2ZW50LCBUb2FzdHlFdmVudFR5cGUgfSBmcm9tICcuL3RvYXN0eS5zZXJ2aWNlJztcblxuLyoqXG4gKiBUb2FzdHkgaXMgY29udGFpbmVyIGZvciBUb2FzdCBjb21wb25lbnRzXG4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ25nMi10b2FzdHknLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxkaXYgaWQ9XCJ0b2FzdHlcIiBbbmdDbGFzc109XCJbcG9zaXRpb25dXCI+XG4gICAgICAgIDxuZzItdG9hc3QgKm5nRm9yPVwibGV0IHRvYXN0IG9mIHRvYXN0c1wiIFt0b2FzdF09XCJ0b2FzdFwiIChjbG9zZVRvYXN0KT1cImNsb3NlVG9hc3QodG9hc3QpXCI+PC9uZzItdG9hc3Q+XG4gICAgPC9kaXY+YFxufSlcbmV4cG9ydCBjbGFzcyBUb2FzdHlDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICAvKipcbiAgICogU2V0IG9mIGNvbnN0YW50cyBkZWZpbnMgcG9zaXRpb24gb2YgVG9hc3R5IG9uIHRoZSBwYWdlLlxuICAgKi9cbiAgc3RhdGljIFBPU0lUSU9OUzogQXJyYXk8U3RyaW5nPiA9IFsnYm90dG9tLXJpZ2h0JywgJ2JvdHRvbS1sZWZ0JywgJ3RvcC1yaWdodCcsICd0b3AtbGVmdCcsICd0b3AtY2VudGVyJywgJ2JvdHRvbS1jZW50ZXInLCAnY2VudGVyLWNlbnRlciddO1xuXG4gIHByaXZhdGUgX3Bvc2l0aW9uOiBzdHJpbmcgPSAnJztcbiAgLy8gVGhlIHdpbmRvdyBwb3NpdGlvbiB3aGVyZSB0aGUgdG9hc3QgcG9wcyB1cC4gUG9zc2libGUgdmFsdWVzOlxuICAvLyAtIGJvdHRvbS1yaWdodCAoZGVmYXVsdCB2YWx1ZSBmcm9tIFRvYXN0Q29uZmlnKVxuICAvLyAtIGJvdHRvbS1sZWZ0XG4gIC8vIC0gdG9wLXJpZ2h0XG4gIC8vIC0gdG9wLWxlZnRcbiAgLy8gLSB0b3AtY2VudGVyXG4gIC8vIC0gYm90dG9tLWNlbnRlclxuICAvLyAtIGNlbnRlci1jZW50ZXJcbiAgQElucHV0KCkgc2V0IHBvc2l0aW9uKHZhbHVlOiBzdHJpbmcpIHtcbiAgICBpZiAodmFsdWUpIHtcbiAgICAgIGxldCBub3RGb3VuZCA9IHRydWU7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IFRvYXN0eUNvbXBvbmVudC5QT1NJVElPTlMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKFRvYXN0eUNvbXBvbmVudC5QT1NJVElPTlNbaV0gPT09IHZhbHVlKSB7XG4gICAgICAgICAgbm90Rm91bmQgPSBmYWxzZTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG5vdEZvdW5kKSB7XG4gICAgICAgIC8vIFBvc2l0aW9uIHdhcyB3cm9uZyAtIGNsZWFyIGl0IGhlcmUgdG8gdXNlIHRoZSBvbmUgZnJvbSBjb25maWcuXG4gICAgICAgIHZhbHVlID0gdGhpcy5jb25maWcucG9zaXRpb247XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhbHVlID0gdGhpcy5jb25maWcucG9zaXRpb247XG4gICAgfVxuICAgIHRoaXMuX3Bvc2l0aW9uID0gJ3RvYXN0eS1wb3NpdGlvbi0nICsgdmFsdWU7XG4gIH1cblxuICBnZXQgcG9zaXRpb24oKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5fcG9zaXRpb247XG4gIH1cblxuICAvLyBUaGUgc3RvcmFnZSBmb3IgdG9hc3RzLlxuICB0b2FzdHM6IEFycmF5PFRvYXN0RGF0YT4gPSBbXTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGNvbmZpZzogVG9hc3R5Q29uZmlnLCBwcml2YXRlIHRvYXN0eVNlcnZpY2U6IFRvYXN0eVNlcnZpY2UpIHtcbiAgICAvLyBJbml0aWFsaXNlIHBvc2l0aW9uXG4gICAgdGhpcy5wb3NpdGlvbiA9ICcnO1xuICB9XG5cbiAgLyoqXG4gICAqIGBuZ09uSW5pdGAgaXMgY2FsbGVkIHJpZ2h0IGFmdGVyIHRoZSBkaXJlY3RpdmUncyBkYXRhLWJvdW5kIHByb3BlcnRpZXMgaGF2ZSBiZWVuIGNoZWNrZWQgZm9yIHRoZVxuICAgKiBmaXJzdCB0aW1lLCBhbmQgYmVmb3JlIGFueSBvZiBpdHMgY2hpbGRyZW4gaGF2ZSBiZWVuIGNoZWNrZWQuIEl0IGlzIGludm9rZWQgb25seSBvbmNlIHdoZW4gdGhlXG4gICAqIGRpcmVjdGl2ZSBpcyBpbnN0YW50aWF0ZWQuXG4gICAqL1xuICBuZ09uSW5pdCgpOiBhbnkge1xuICAgIC8vIFdlIGxpc3RlbiBldmVudHMgZnJvbSBvdXIgc2VydmljZVxuICAgIHRoaXMudG9hc3R5U2VydmljZS5ldmVudHMuc3Vic2NyaWJlKChldmVudDogVG9hc3R5RXZlbnQpID0+IHtcbiAgICAgIGlmIChldmVudC50eXBlID09PSBUb2FzdHlFdmVudFR5cGUuQUREKSB7XG4gICAgICAgIC8vIEFkZCB0aGUgbmV3IG9uZVxuICAgICAgICBsZXQgdG9hc3Q6IFRvYXN0RGF0YSA9IGV2ZW50LnZhbHVlO1xuICAgICAgICB0aGlzLmFkZCh0b2FzdCk7XG4gICAgICB9IGVsc2UgaWYgKGV2ZW50LnR5cGUgPT09IFRvYXN0eUV2ZW50VHlwZS5DTEVBUikge1xuICAgICAgICAvLyBDbGVhciB0aGUgb25lIGJ5IG51bWJlclxuICAgICAgICBsZXQgaWQ6IG51bWJlciA9IGV2ZW50LnZhbHVlO1xuICAgICAgICB0aGlzLmNsZWFyKGlkKTtcbiAgICAgIH0gZWxzZSBpZiAoZXZlbnQudHlwZSA9PT0gVG9hc3R5RXZlbnRUeXBlLkNMRUFSX0FMTCkge1xuICAgICAgICAvLyBMZXRzIGNsZWFyIGFsbCB0b2FzdHNcbiAgICAgICAgdGhpcy5jbGVhckFsbCgpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIEV2ZW50IGxpc3RlbmVyIG9mICdjbG9zZVRvYXN0JyBldmVudCBjb21lcyBmcm9tIFRvYXN0eUNvbXBvbmVudC5cbiAgICogVGhpcyBtZXRob2QgcmVtb3ZlcyBUb2FzdENvbXBvbmVudCBhc3Nvc2lhdGVkIHdpdGggdGhpcyBUb2FzdC5cbiAgICovXG4gIGNsb3NlVG9hc3QodG9hc3Q6IFRvYXN0RGF0YSkge1xuICAgIHRoaXMuY2xlYXIodG9hc3QuaWQpO1xuICB9XG5cbiAgLyoqXG4gICAqIEFkZCBuZXcgVG9hc3RcbiAgICovXG4gIGFkZCh0b2FzdDogVG9hc3REYXRhKSB7XG4gICAgLy8gSWYgd2UndmUgZ29uZSBvdmVyIG91ciBsaW1pdCwgcmVtb3ZlIHRoZSBlYXJsaWVzdFxuICAgIC8vIG9uZSBmcm9tIHRoZSBhcnJheVxuICAgIGlmICh0aGlzLnRvYXN0cy5sZW5ndGggPj0gdGhpcy5jb25maWcubGltaXQpIHtcbiAgICAgIHRoaXMudG9hc3RzLnNoaWZ0KCk7XG4gICAgfVxuICAgIC8vIEFkZCB0b2FzdHkgdG8gYXJyYXlcbiAgICB0aGlzLnRvYXN0cy5wdXNoKHRvYXN0KTtcbiAgICAvL1xuICAgIC8vIElmIHRoZXJlJ3MgYSB0aW1lb3V0IGluZGl2aWR1YWxseSBvciBnbG9iYWxseSxcbiAgICAvLyBzZXQgdGhlIHRvYXN0IHRvIHRpbWVvdXRcbiAgICBpZiAodG9hc3QudGltZW91dCkge1xuICAgICAgdGhpcy5fc2V0VGltZW91dCh0b2FzdCk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIENsZWFyIGluZGl2aWR1YWwgdG9hc3QgYnkgaWRcbiAgICogQHBhcmFtIGlkIGlzIHVuaXF1ZSBpZGVudGlmaWVyIG9mIFRvYXN0XG4gICAqL1xuICBjbGVhcihpZDogbnVtYmVyKSB7XG4gICAgaWYgKGlkKSB7XG4gICAgICB0aGlzLnRvYXN0cy5mb3JFYWNoKCh2YWx1ZTogYW55LCBrZXk6IG51bWJlcikgPT4ge1xuICAgICAgICBpZiAodmFsdWUuaWQgPT09IGlkKSB7XG4gICAgICAgICAgaWYgKHZhbHVlLm9uUmVtb3ZlICYmIGlzRnVuY3Rpb24odmFsdWUub25SZW1vdmUpKSB7XG4gICAgICAgICAgICB2YWx1ZS5vblJlbW92ZS5jYWxsKHRoaXMsIHZhbHVlKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgdGhpcy50b2FzdHMuc3BsaWNlKGtleSwgMSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ1BsZWFzZSBwcm92aWRlIGlkIG9mIFRvYXN0IHRvIGNsb3NlJyk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIENsZWFyIGFsbCB0b2FzdHNcbiAgICovXG4gIGNsZWFyQWxsKCkge1xuICAgIHRoaXMudG9hc3RzLmZvckVhY2goKHZhbHVlOiBhbnksIGtleTogbnVtYmVyKSA9PiB7XG4gICAgICBpZiAodmFsdWUub25SZW1vdmUgJiYgaXNGdW5jdGlvbih2YWx1ZS5vblJlbW92ZSkpIHtcbiAgICAgICAgdmFsdWUub25SZW1vdmUuY2FsbCh0aGlzLCB2YWx1ZSk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgdGhpcy50b2FzdHMgPSBbXTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDdXN0b20gc2V0VGltZW91dCBmdW5jdGlvbiBmb3Igc3BlY2lmaWMgc2V0VGltZW91dHMgb24gaW5kaXZpZHVhbCB0b2FzdHMuXG4gICAqL1xuICBwcml2YXRlIF9zZXRUaW1lb3V0KHRvYXN0OiBUb2FzdERhdGEpIHtcbiAgICB3aW5kb3cuc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB0aGlzLmNsZWFyKHRvYXN0LmlkKTtcbiAgICB9LCB0b2FzdC50aW1lb3V0KTtcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi90c2xpbnQtbG9hZGVyIS4vc3JjL3RvYXN0eS5jb21wb25lbnQudHMiLCJcbi8vIENvcHlyaWdodCAoQykgMjAxNi0yMDE3IFNlcmdleSBBa29wa29raHlhbnRzXG4vLyBUaGlzIHByb2plY3QgaXMgbGljZW5zZWQgdW5kZXIgdGhlIHRlcm1zIG9mIHRoZSBNSVQgbGljZW5zZS5cbi8vIGh0dHBzOi8vZ2l0aHViLmNvbS9ha3NlcmcvbmcyLXRvYXN0eVxuXG4vKipcbiAqIENoZWNrIGFuZCByZXR1cm4gdHJ1ZSBpZiBhbiBvYmplY3QgaXMgdHlwZSBvZiBzdHJpbmdcbiAqIEBwYXJhbSBvYmogQW5hbHlzZSBoYXMgdG8gb2JqZWN0IHRoZSBzdHJpbmcgdHlwZVxuICogQHJldHVybiByZXN1bHQgb2YgYW5hbHlzaXNcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGlzU3RyaW5nKG9iajogYW55KTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHR5cGVvZiBvYmogPT09IFwic3RyaW5nXCI7XG59XG5cbi8qKlxuICogQ2hlY2sgYW5kIHJldHVybiB0cnVlIGlmIGFuIG9iamVjdCBpcyB0eXBlIG9mIG51bWJlclxuICogQHBhcmFtIG9iaiBBbmFseXNlIGhhcyB0byBvYmplY3QgdGhlIGJvb2xlYW4gdHlwZVxuICogQHJldHVybiByZXN1bHQgb2YgYW5hbHlzaXNcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGlzTnVtYmVyKG9iajogYW55KTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHR5cGVvZiBvYmogPT09IFwibnVtYmVyXCI7XG59XG5cbi8qKlxuICogQ2hlY2sgYW5kIHJldHVybiB0cnVlIGlmIGFuIG9iamVjdCBpcyB0eXBlIG9mIEZ1bmN0aW9uXG4gKiBAcGFyYW0gb2JqIEFuYWx5c2UgaGFzIHRvIG9iamVjdCB0aGUgZnVuY3Rpb24gdHlwZVxuICogQHJldHVybiByZXN1bHQgb2YgYW5hbHlzaXNcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGlzRnVuY3Rpb24ob2JqOiBhbnkpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdHlwZW9mIG9iaiA9PT0gXCJmdW5jdGlvblwiO1xufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi90c2xpbnQtbG9hZGVyIS4vc3JjL3RvYXN0eS51dGlscy50cyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV82X187XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJAYW5ndWxhci9jb21tb25cIlxuLy8gbW9kdWxlIGlkID0gNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyBDb3B5cmlnaHQgKEMpIDIwMTYtMjAxNyBTZXJnZXkgQWtvcGtva2h5YW50c1xuLy8gVGhpcyBwcm9qZWN0IGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSB0ZXJtcyBvZiB0aGUgTUlUIGxpY2Vuc2UuXG4vLyBodHRwczovL2dpdGh1Yi5jb20vYWtzZXJnL25nMi10b2FzdHlcblxuaW1wb3J0IHsgTmdNb2R1bGUsIE1vZHVsZVdpdGhQcm92aWRlcnMgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcblxuZXhwb3J0ICogZnJvbSAnLi9zcmMvdG9hc3R5LnNlcnZpY2UnO1xuZXhwb3J0ICogZnJvbSAnLi9zcmMvdG9hc3R5LmNvbXBvbmVudCc7XG5leHBvcnQgKiBmcm9tICcuL3NyYy90b2FzdC5jb21wb25lbnQnO1xuZXhwb3J0ICogZnJvbSAnLi9zcmMvc2hhcmVkJztcblxuaW1wb3J0IHsgVG9hc3R5Q29tcG9uZW50IH0gZnJvbSAnLi9zcmMvdG9hc3R5LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBUb2FzdENvbXBvbmVudCB9IGZyb20gJy4vc3JjL3RvYXN0LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBTYWZlSHRtbFBpcGUgfSBmcm9tICcuL3NyYy9zaGFyZWQnO1xuaW1wb3J0IHsgVG9hc3R5U2VydmljZSwgVG9hc3R5Q29uZmlnLCB0b2FzdHlTZXJ2aWNlRmFjdG9yeSB9IGZyb20gJy4vc3JjL3RvYXN0eS5zZXJ2aWNlJztcblxuZXhwb3J0IGxldCBwcm92aWRlcnMgPSBbXG4gICAgVG9hc3R5Q29uZmlnLFxuICAgIHsgcHJvdmlkZTogVG9hc3R5U2VydmljZSwgdXNlRmFjdG9yeTogdG9hc3R5U2VydmljZUZhY3RvcnksIGRlcHM6IFtUb2FzdHlDb25maWddIH1cbl07XG5cbkBOZ01vZHVsZSh7XG4gICAgaW1wb3J0czogW0NvbW1vbk1vZHVsZV0sXG4gICAgZGVjbGFyYXRpb25zOiBbVG9hc3RDb21wb25lbnQsIFRvYXN0eUNvbXBvbmVudCwgU2FmZUh0bWxQaXBlXSxcbiAgICBleHBvcnRzOiBbIFRvYXN0Q29tcG9uZW50LCBUb2FzdHlDb21wb25lbnRdLFxuICAgIHByb3ZpZGVyczogcHJvdmlkZXJzXG59KVxuZXhwb3J0IGNsYXNzIFRvYXN0eU1vZHVsZSB7XG4gICAgc3RhdGljIGZvclJvb3QoKTogTW9kdWxlV2l0aFByb3ZpZGVycyB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBuZ01vZHVsZTogVG9hc3R5TW9kdWxlLFxuICAgICAgICAgICAgcHJvdmlkZXJzOiBwcm92aWRlcnNcbiAgICAgICAgfTtcbiAgICB9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi90c2xpbnQtbG9hZGVyIS4vaW5kZXgudHMiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfOF9fO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3NlclwiXG4vLyBtb2R1bGUgaWQgPSA4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV85X187XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJyeGpzL1N1YmplY3RcIlxuLy8gbW9kdWxlIGlkID0gOVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwic291cmNlUm9vdCI6IiJ9