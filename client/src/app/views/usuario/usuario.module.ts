import { MatButtonModule, MatInputModule } from '@angular/material';
import { MatCardModule } from '@angular/material';
import { MatIconModule } from '@angular/material';
import { ModalUsuarioComponent } from './modal/modal-user.component';
import { GenericService } from './../../services/generic/generic.service';
import { MatDialogModule, MatSlideToggleModule } from '@angular/material';
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
        MatInputModule
    ],
    providers: [
        GenericService
    ],
    entryComponents:[ModalUsuarioComponent]
})

export class UsuarioModule { }
