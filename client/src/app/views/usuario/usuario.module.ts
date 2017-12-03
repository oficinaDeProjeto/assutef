import { MatButtonModule, MatInputModule } from '@angular/material';
import { MatCardModule } from '@angular/material';
import { MatIconModule, MatTooltipModule, MatPaginatorModule } from '@angular/material';
import { ModalUsuarioComponent } from './modal/modal-user.component';
import { GenericService } from './../../services/generic/generic.service';
import { MatDialogModule, MatSlideToggleModule, MatSnackBarModule, MatSelectModule, MatStepperModule } from '@angular/material';
import { UsuarioComponent } from './usuario.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@NgModule({
    declarations: [UsuarioComponent, ModalUsuarioComponent],
    exports: [UsuarioComponent, ModalUsuarioComponent],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        MatDialogModule,
        MatIconModule,
        MatCardModule,
        MatSlideToggleModule,
        MatButtonModule,
        MatInputModule,
		FlexLayoutModule,
		MatSnackBarModule,
        MatTooltipModule,
        MatPaginatorModule,                
        MatSelectModule ,
        MatStepperModule    
    ],
    providers: [
        GenericService
    ],
    entryComponents:[ModalUsuarioComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class UsuarioModule { }
