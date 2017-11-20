import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { GenericService } from './../../services/generic/generic.service';
import { MatDialogModule, MatSlideToggleModule } from '@angular/material';
import { MatButtonModule, MatInputModule } from '@angular/material';
import { MatCardModule } from '@angular/material';
import { MatIconModule } from '@angular/material';
import { ModalGrupousuarioComponent } from './modal/modal-grupouser.component';
import { GrupousuarioComponent } from './grupousuario.component';
import { appMaskModule } from './../../directives/mask.module';
import { GrupousuarioService } from './../../services/grupousuario/grupousuario.service';
import { AuthService } from './../../services/auth/auth.service';
import { ConfirmDialogModule } from './../../components/common/confirm-dialog/confirm-dialog.module';
import {
  
  MatStepperModule,
  MatSelectModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatRadioModule,
  MatSnackBarModule,
  MatTooltipModule
} from "@angular/material";



@NgModule({
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
    appMaskModule,
    MatSnackBarModule,
    ConfirmDialogModule
  ],
  providers: [
    AuthService, GenericService, GrupousuarioService
  ],
  entryComponents:[ModalGrupousuarioComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  declarations: [GrupousuarioComponent, ModalGrupousuarioComponent],
  exports: [GrupousuarioComponent, ModalGrupousuarioComponent],
  
})
export class GrupousuarioModule { }
