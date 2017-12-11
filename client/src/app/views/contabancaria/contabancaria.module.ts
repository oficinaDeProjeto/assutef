import { MaskModule } from './../../directives/mask/mask.module';
import { ModalContabancariaComponent } from './modal/modal-contabancaria.component';
import { ContabancariaComponent } from './contabancaria.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ContabancariaService } from '../../services/contabancaria/contabancaria.service';
import {
    MatDialogModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatStepperModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatRadioModule,
    MatSnackBarModule,
    MatTooltipModule,
    MatPaginatorModule
} from "@angular/material";
import { ConfirmDialogModule } from '../../components/common/confirm-dialog/confirm-dialog.module';
import { GenericService } from '../../services/generic/generic.service';
import { AuthService } from '../../services/auth/auth.service';

@NgModule({
    declarations: [ContabancariaComponent, ModalContabancariaComponent],
    exports: [ContabancariaComponent, ModalContabancariaComponent],
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
        MatTooltipModule,
        FlexLayoutModule,
        MatSnackBarModule,
        ConfirmDialogModule,
        MaskModule,
        MatPaginatorModule
    ],
    entryComponents:[ModalContabancariaComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
    providers:[ContabancariaService, AuthService, GenericService]

})

export class ContabancariaModule { }

//todos os componentes utilizado para fazer o contabancaria
