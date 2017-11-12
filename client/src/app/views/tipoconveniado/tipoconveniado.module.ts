import { MatDialogModule, MatInputModule, MatButtonModule, MatCardModule, MatFormFieldModule, MatIconModule, MatStepperModule, MatSelectModule, MatDatepickerModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { TipoconveniadoComponent } from './tipoconveniado.component';
import { ModalTipoconveniadoComponent } from './modal/modal-tipoconveniado.component';
import { AuthService } from '../../services/auth/auth.service';
import { TipoconveniadoService } from '../../services/tipoconveniado/tipoconveniado.service';

@NgModule({
    declarations: [TipoconveniadoComponent, ModalTipoconveniadoComponent],
    exports: [TipoconveniadoComponent, ModalTipoconveniadoComponent],
    imports: [
        FlexLayoutModule,
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
        MatButtonModule,
        FlexLayoutModule,        
    ],
    entryComponents:[ModalTipoconveniadoComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
    providers: [AuthService, TipoconveniadoService]
})

export class TipoconveniadoModule { }
