import { ModuleWithProviders } from "@angular/core";
export * from './src/toasty.service';
export * from './src/toasty.component';
export * from './src/toast.component';
export * from './src/shared';
import { ToastyService, ToastyConfig } from './src/toasty.service';
export declare let providers: (typeof ToastyConfig | {
    provide: typeof ToastyService;
    useFactory: (config: ToastyConfig) => ToastyService;
    deps: typeof ToastyConfig[];
})[];
export declare class ToastyModule {
    static forRoot(): ModuleWithProviders;
}
