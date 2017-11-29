import { MaskModule } from './../../directives/mask/mask.module';
import { ConfirmDialogModule } from './../../components/common/confirm-dialog/confirm-dialog.module';
import { AssociadoService } from './../../services/associado/associado.service';
import { GenericService } from './../../services/generic/generic.service';
import { AuthService } from './../../services/auth/auth.service';
import { ModalAssociadoComponent } from './modal/modal-associado.component';
import { AssociadoComponent } from './associado.component';
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
    MatDatepickerModule,
    MatNativeDateModule,
    MatRadioModule,
    MatSnackBarModule,
    MatTooltipModule
} from "@angular/material";

@NgModule({
    declarations: [AssociadoComponent, ModalAssociadoComponent],
    exports: [AssociadoComponent, ModalAssociadoComponent],
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
        MaskModule,
        MatSnackBarModule,
        ConfirmDialogModule,
        MaskModule
    ],
    entryComponents: [ModalAssociadoComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
    providers: [AuthService, GenericService, AssociadoService]
})

export class AssociadoModule { }
