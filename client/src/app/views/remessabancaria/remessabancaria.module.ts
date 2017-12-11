import { MaskModule } from './../../directives/mask/mask.module';
import { ModalRemessabancariaComponent } from './modal/modal-remessabancaria.component';
import { RemessabancariaComponent } from './remessabancaria.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { RemessabancariaService } from '../../services/remessabancaria/remessabancaria.service';
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
    declarations: [RemessabancariaComponent, ModalRemessabancariaComponent],
    exports: [RemessabancariaComponent, ModalRemessabancariaComponent],
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
    entryComponents:[ModalRemessabancariaComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
    providers:[RemessabancariaService, AuthService, GenericService]

})

export class RemessabancariaModule { }

//todos os componentes utilizado para fazer o remessabancaria
