import { MatButtonModule, MatInputModule } from '@angular/material';
import { MatCardModule } from '@angular/material';
import { MatIconModule, MatTooltipModule } from '@angular/material';
import { ModalUsuarioComponent } from './modal/modal-user.component';
import { GenericService } from './../../services/generic/generic.service';
import { MatDialogModule, MatSlideToggleModule, MatSnackBarModule } from '@angular/material';
import { UsuarioComponent } from './usuario.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NgModule } from "@angular/core";
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
        MatTooltipModule
    ],
    providers: [
        GenericService
    ],
    entryComponents:[ModalUsuarioComponent]
})

export class UsuarioModule { }
