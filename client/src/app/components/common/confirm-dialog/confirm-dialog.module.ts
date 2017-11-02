import { ConfirmDialogService } from './confirm-dialog.service';
import { ConfirmDialog } from './confirm-dialog.component';
import { MatDialogModule, MatButtonModule } from '@angular/material';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    MatDialogModule,
    MatButtonModule,
  ],
  exports: [
    ConfirmDialog,
  ],
  declarations: [
    ConfirmDialog,
  ],
  providers: [
    ConfirmDialogService,
  ],
  entryComponents: [
    ConfirmDialog,
  ]
})
export class ConfirmDialogModule { }


