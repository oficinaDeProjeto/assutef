import { NavigationModule } from './../navigation/navigation.module';
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { BrowserModule } from "@angular/platform-browser";

import { blankComponent } from "./blank.component";
import { BasicComponent } from "./basic.component";
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatToolbarModule, MatButtonModule, MatMenuModule, MatIconModule, MatSidenavModule } from '@angular/material';


@NgModule({
    declarations: [blankComponent, BasicComponent],
    imports: [
        BrowserModule,
        RouterModule,
        FlexLayoutModule,
        MatToolbarModule,
        MatButtonModule,
        MatMenuModule,
        MatIconModule,
        MatSidenavModule,
        NavigationModule
    ],

    exports: [blankComponent, BasicComponent]
})

export class LayoutsModule { }