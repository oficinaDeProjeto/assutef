
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
    MatListModule,
    MatNativeDateModule,
    MatRadioModule
} from "@angular/material";
import { ConveniadoComponent } from './conveniado.component';
import { ModalConveniadoComponent } from './modal/modal-conveniado.component';
import { appMaskModule } from '../../directives/mask.module';
import { ConveniadoService } from '../../services/conveniado/conveniado.service';
import { TipoconveniadoService } from '../../services/tipoconveniado/tipoconveniado.service';

@NgModule({
    declarations: [ConveniadoComponent, ModalConveniadoComponent],
    exports: [ConveniadoComponent, ModalConveniadoComponent],
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
        appMaskModule
    ],
    entryComponents: [ModalConveniadoComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
    providers: [AuthService, ConveniadoService, TipoconveniadoService]
})

export class ConveniadoModule { }
