import { MaskModule } from './../../directives/mask/mask.module';
import { ModalProdutoComponent } from './modal/modal-produto.component';
import { ProdutoComponent } from './produto.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ProdutoService } from '../../services/produto/produto.service';
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
    declarations: [ProdutoComponent, ModalProdutoComponent],
    exports: [ProdutoComponent, ModalProdutoComponent],
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
    entryComponents:[ModalProdutoComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
    providers:[ProdutoService, AuthService, GenericService]
    
})

export class ProdutoModule { }

//todos os componentes utilizado para fazer o produto