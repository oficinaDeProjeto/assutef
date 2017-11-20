import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { CommonModule } from '@angular/common';
import { PainelComponent } from './painel.component';
import { NgModule } from '@angular/core';


@NgModule({
    declarations: [PainelComponent],
    exports:[PainelComponent],
    imports: [CommonModule, FlexLayoutModule, RouterModule],
    providers: []
})

export class PainelModule { }