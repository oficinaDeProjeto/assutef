import { Component, OnInit, Inject, Optional } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatSnackBar } from '@angular/material';
import { GenericService } from '../../../services/generic/generic.service';
import { Banco } from '../../../models/banco';
import { BancoService } from '../../../services/banco/banco.service';


@Component({
	selector: 'app-modal-banco',
	templateUrl: './modal-banco.component.html',
	styleUrls: ['./modal-banco.component.css']
})
export class ModalBancoComponent implements OnInit {
	banco: Banco = new Banco();

	constructor(
		public dialogRef: MatDialogRef<ModalBancoComponent>,
		@Optional() @Inject(MAT_DIALOG_DATA) public data: Banco,
		private genericService: GenericService,
		private BancoService: BancoService,
		public snackBar: MatSnackBar
	) { }

	ngOnInit() {
		if (this.data)
			this.banco = this.data;
	}

	openSnakBar(message: string, action: string){
		this.snackBar.open(message, action, {
			duration: 10000,
		});
	}
}
