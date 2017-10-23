import { MatDialogModule, MatInputModule } from '@angular/material';
import { ModalCategoriaComponent } from './modal/modal-categoria.component';
import { CategoriaComponent } from './categoria.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@NgModule({
    declarations: [CategoriaComponent, ModalCategoriaComponent],
    exports: [CategoriaComponent, ModalCategoriaComponent],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        MatDialogModule,
        MatInputModule     
    ],
    entryComponents:[ModalCategoriaComponent]
})

export class CategoriaModule { }
