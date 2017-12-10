import { NgModule } from '@angular/core';
import { HomeComponent } from './home.component';
import { BrowserModule } from '@angular/platform-browser';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatExpansionModule } from '@angular/material';

@NgModule({
    declarations: [HomeComponent],
    exports:[HomeComponent],
    imports: [CommonModule, FlexLayoutModule, RouterModule, MatExpansionModule],
    providers: []
})

export class HomeModule { }