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
    MatNativeDateModule,
    MatAutocompleteModule
} from "@angular/material";

import { ChequinhoService } from '../../services/chequinho/chequinho.service';
import { RechequinhoComponent } from './rechequinho.component';


@NgModule({
    declarations: [RechequinhoComponent],
    exports: [RechequinhoComponent],
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
        MatAutocompleteModule  ,
        MatListModule   
       
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
    providers:[
        AuthService,        
        ChequinhoService
    ]
})

export class RechequinhoModule { }
