import { MatDialogModule, MatInputModule, MatButtonModule,MatSelectModule } from '@angular/material';

import { ModalCategoriaComponent } from './modal/modal-categoria.component';
import { CategoriaComponent } from './categoria.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { appMaskModule } from '../../directives/mask.module';
import { ConfirmDialogModule } from '../../components/common/confirm-dialog/confirm-dialog.module';
import { CategoriaService } from '../../services/categoria/categoria.service';
import { GenericService } from '../../services/generic/generic.service';
import { AuthService } from '../../services/auth/auth.service';

@NgModule({
    declarations: [CategoriaComponent, ModalCategoriaComponent],
    exports: [CategoriaComponent, ModalCategoriaComponent],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        MatDialogModule,
        MatInputModule,
        MatButtonModule,
        MatInputModule,
        MatButtonModule,
       
             

    ],
    entryComponents:[ModalCategoriaComponent],
   
})

export class CategoriaModule { }
