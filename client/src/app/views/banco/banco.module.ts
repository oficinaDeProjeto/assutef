import { ConfirmDialogModule } from './../../components/common/confirm-dialog/confirm-dialog.module';
import { CategoriaService } from './../../services/categoria/categoria.service';
import { appMaskModule } from './../../directives/mask.module';
import { GenericService } from './../../services/generic/generic.service';
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
    MatDatepickerModule,
    MatNativeDateModule,
    MatRadioModule,
    MatSnackBarModule,
    MatTooltipModule
} from "@angular/material";
import { BancoComponent } from './banco.component';
import { ModalBancoComponent } from './modal/modal-banco.component';
import { BancoService } from '../../services/banco/banco.service';


@NgModule({
    declarations: [BancoComponent, ModalBancoComponent],
    exports: [BancoComponent, ModalBancoComponent],
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
        appMaskModule,
        MatSnackBarModule,
        ConfirmDialogModule
       
             

    ],
    entryComponents:[ModalBancoComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
    providers: [AuthService, GenericService, BancoService]  
})

export class BancoModule { }
