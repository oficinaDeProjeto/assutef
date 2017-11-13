import { AssociadoService } from './../../services/associado/associado.service';
import { appMaskModule } from './../../directives/mask.module';
import { LancamentoService } from './../../services/lancamento/lancamento.service';
import { AuthService } from './../../services/auth/auth.service';
import { FlexLayoutModule } from '@angular/flex-layout';
import { LancamentoComponent } from './lancamento.component'
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import {MatTableModule} from '@angular/material/table';
import { ModalLancamentoComponent } from './modal/modal-lancamento.component'
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
    
} from "@angular/material";

@NgModule({
    declarations: [LancamentoComponent, ModalLancamentoComponent,],
    exports: [LancamentoComponent, ModalLancamentoComponent],
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
        appMaskModule,
        MatSnackBarModule,
        MatTableModule
    ],
    entryComponents: [ModalLancamentoComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
    providers: [AuthService, LancamentoService, AssociadoService]
})

export class LancamentoModule { }
