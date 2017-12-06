import { MaskModule } from './../../directives/mask/mask.module';
import { ConfirmDialogModule } from './../../components/common/confirm-dialog/confirm-dialog.module';
import { CategoriaService } from './../../services/categoria/categoria.service';
import { GenericService } from './../../services/generic/generic.service';
import { AuthService } from './../../services/auth/auth.service';
import { ModalCategoriaComponent } from './modal/modal-categoria.component';
import { CategoriaComponent } from './categoria.component';
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
    MatTooltipModule,
    MatPaginatorModule
} from "@angular/material";

//componentes utilizados para a construção dos modais da categoria
@NgModule({
    declarations: [CategoriaComponent, ModalCategoriaComponent],
    exports: [CategoriaComponent, ModalCategoriaComponent],
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
        MatPaginatorModule
       
             

    ],
    entryComponents:[ModalCategoriaComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
    providers: [AuthService, GenericService, CategoriaService]  
})

export class CategoriaModule { }
