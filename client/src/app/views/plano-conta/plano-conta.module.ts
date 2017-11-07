import { GenericService } from './../../services/generic/generic.service';
import { ModalPlanoContaComponent } from './modal/modal-planoConta.component';
import { PlanoContaService } from './../../services/planoConta/planoConta.service';
import { AuthService } from './../../services/auth/auth.service';
import { PlanoContaComponent } from './plano-conta.component';
import { MatButtonModule } from '@angular/material';
import { MatInputModule } from '@angular/material';
import { MatCardModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import {
    MatDialogModule,
    MatIconModule,
    MatStepperModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatRadioModule,
    MatSnackBarModule
} from "@angular/material";

@NgModule({
    declarations: [PlanoContaComponent, ModalPlanoContaComponent],
    exports: [PlanoContaComponent, ModalPlanoContaComponent],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        MatDialogModule,
        MatCardModule,
        MatInputModule,
        MatButtonModule,
        MatIconModule,
        MatStepperModule,
        MatSelectModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatButtonModule,
        MatRadioModule,
        FlexLayoutModule,
        MatSnackBarModule    
    ],
    entryComponents: [ModalPlanoContaComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
    providers: [AuthService, PlanoContaService, GenericService]
})

export class PlanoContaModule { }
