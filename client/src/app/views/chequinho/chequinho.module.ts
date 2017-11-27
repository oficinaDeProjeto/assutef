import { AuthService } from './../../services/auth/auth.service';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import {
    MatDialogModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatStepperModule,
    MatSelectModule,    
    MatListModule,
    MatNativeDateModule
} from "@angular/material";
import { ChequinhoComponent } from './chequinho.component';
import { ImpressaoChequinhoComponent } from './impressao/impressao-chequinho.component';

import { ChequinhoService } from '../../services/chequinho/chequinho.service';


@NgModule({
    declarations: [ChequinhoComponent],
    exports: [ChequinhoComponent],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,        
        MatCardModule,
        MatInputModule,
        MatButtonModule,                
        MatSelectModule,        
        MatButtonModule,        
        FlexLayoutModule,        
       
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
    providers:[
        AuthService,        
        ChequinhoService
    ]
})

export class ChequinhoModule { }
