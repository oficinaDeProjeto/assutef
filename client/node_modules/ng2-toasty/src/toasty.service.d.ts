import { Observable } from 'rxjs/Observable';
/**
 * Options to configure specific Toast
 */
export declare class ToastOptions {
    title: string;
    msg?: string;
    showClose?: boolean;
    theme?: string;
    timeout?: number;
    onAdd?: Function;
    onRemove?: Function;
}
/**
 * Structrure of Toast
 */
export declare class ToastData {
    id: number;
    title: string;
    msg: string;
    showClose: boolean;
    type: string;
    theme: string;
    timeout: number;
    onAdd: Function;
    onRemove: Function;
    onClick: Function;
}
/**
 * Default configuration foa all toats and toasty container
 */
export declare class ToastyConfig {
    limit: number;
    showClose: boolean;
    position: 'bottom-right' | 'bottom-left' | 'top-right' | 'top-left' | 'top-center' | 'bottom-center' | 'center-center';
    timeout: number;
    theme: 'default' | 'material' | 'bootstrap';
}
export declare enum ToastyEventType {
    ADD = 0,
    CLEAR = 1,
    CLEAR_ALL = 2,
}
export declare class ToastyEvent {
    type: ToastyEventType;
    value: any;
    constructor(type: ToastyEventType, value?: any);
}
export declare function toastyServiceFactory(config: ToastyConfig): ToastyService;
/**
 * Toasty service helps create different kinds of Toasts
 */
export declare class ToastyService {
    private config;
    static THEMES: Array<string>;
    uniqueCounter: number;
    private eventSource;
    events: Observable<ToastyEvent>;
    constructor(config: ToastyConfig);
    /**
     * Get list of toats
     */
    /**
     * Create Toast of a default type
     */
    default(options: ToastOptions | string | number): void;
    /**
     * Create Toast of info type
     * @param  {object} options Individual toasty config overrides
     */
    info(options: ToastOptions | string | number): void;
    /**
     * Create Toast of success type
     * @param  {object} options Individual toasty config overrides
     */
    success(options: ToastOptions | string | number): void;
    /**
     * Create Toast of wait type
     * @param  {object} options Individual toasty config overrides
     */
    wait(options: ToastOptions | string | number): void;
    /**
     * Create Toast of error type
     * @param  {object} options Individual toasty config overrides
     */
    error(options: ToastOptions | string | number): void;
    /**
     * Create Toast of warning type
     * @param  {object} options Individual toasty config overrides
     */
    warning(options: ToastOptions | string | number): void;
    private add(options, type);
    clearAll(): void;
    clear(id: number): void;
    private _checkConfigItem(config, options, property);
    private emitEvent(event);
}
