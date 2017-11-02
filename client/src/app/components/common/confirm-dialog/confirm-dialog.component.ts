import { MatDialogRef } from '@angular/material';
import { Component } from '@angular/core';

@Component({
    selector: 'app-confirm-dialog',
    template: `
        <p>{{ title }}</p>
        <p>{{ message }}</p>
        <button type="button" mat-raised-button 
            (click)="dialogRef.close(true)">OK</button>
        <button type="button" mat-button 
            (click)="dialogRef.close()">Cancelar</button>
    `,
})
export class ConfirmDialog {

    public title: string;
    public message: string;

    constructor(public dialogRef: MatDialogRef<ConfirmDialog>) {

    }
}