import { MatButtonModule } from '@angular/material';
import { MatInputModule } from '@angular/material';
import { MatCardModule } from '@angular/material';
import { ChequinhoComponent } from './chequinho.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@NgModule({
    declarations: [ChequinhoComponent],
    exports: [ChequinhoComponent],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        MatCardModule,
        MatInputModule,
        MatButtonModule
       
    ],
})

export class ChequinhoModule { }
