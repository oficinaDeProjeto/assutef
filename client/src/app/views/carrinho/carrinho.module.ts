import { CarrinhoService } from './../../services/carrinho/carrinho.service';
import { appMaskModule } from './../../directives/mask.module';
import { GenericService } from './../../services/generic/generic.service';
import { AuthService } from './../../services/auth/auth.service';
import { CarrinhoComponent } from './carrinho.component';
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
    MatSnackBarModule
} from "@angular/material";

@NgModule({
    declarations: [CarrinhoComponent],
    exports: [CarrinhoComponent],
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
        MatSnackBarModule
    ],
    entryComponents: [CarrinhoComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
    providers: [AuthService, GenericService, CarrinhoService]
})

export class CarrinhoModule { }
