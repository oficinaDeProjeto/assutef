import { DomSanitizer } from '@angular/platform-browser';
import { PipeTransform } from '@angular/core';
export declare class SafeHtmlPipe implements PipeTransform {
    private domSanitized;
    constructor(domSanitized: DomSanitizer);
    transform(value: any, ...args: any[]): any;
}
