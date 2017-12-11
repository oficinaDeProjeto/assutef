import { ContaService } from './../../services/conta/conta.service';
import { ContaComponent } from './conta.component';
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
    MatDatepickerModule
} from "@angular/material";


@NgModule({
    declarations: [ContaComponent],
    exports: [ContaComponent],
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
        MatDatepickerModule      
       
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
    providers:[
        AuthService,        
        ContaService
    ]
})

export class ContaModule { }
