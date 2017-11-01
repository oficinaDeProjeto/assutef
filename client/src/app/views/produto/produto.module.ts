import { MatDialogModule, MatInputModule, MatButtonModule, MatSelectModule } from '@angular/material';
import { ModalProdutoComponent } from './modal/modal-produto.component';
import { ProdutoComponent } from './produto.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ProdutoService } from '../../services/produto/produto.service';

@NgModule({
    declarations: [ProdutoComponent, ModalProdutoComponent],
    exports: [ProdutoComponent, ModalProdutoComponent],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        MatDialogModule,
        MatInputModule,
        MatButtonModule,
        MatSelectModule    
    ],
    entryComponents:[ModalProdutoComponent],
    providers:[ProdutoService]
    
})

export class ProdutoModule { }
