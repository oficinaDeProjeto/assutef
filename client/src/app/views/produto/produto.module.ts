import { MatDialogModule, MatInputModule, MatButtonModule } from '@angular/material';
import { ModalProdutoComponent } from './modal/modal-produto.component';
import { ProdutoComponent } from './produto.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@NgModule({
    declarations: [ProdutoComponent, ModalProdutoComponent],
    exports: [ProdutoComponent, ModalProdutoComponent],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        MatDialogModule,
        MatInputModule,
        MatButtonModule     
    ],
    entryComponents:[ModalProdutoComponent]
})

export class ProdutoModule { }
