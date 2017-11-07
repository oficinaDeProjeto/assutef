import { PlanoContaService } from './../../../services/planoConta/planoConta.service';
import { PlanoConta } from './../../../models/planoConta';
import { Masks } from './../../../services/constantes';
import { GenericService } from './../../../services/generic/generic.service';
import { MAT_DIALOG_DATA, MatDialogRef, MatSnackBar } from '@angular/material';
import { Component, OnInit, Optional, Inject } from '@angular/core';

@Component({
	selector: 'app-modal-planoConta',
	templateUrl: './modal-planoConta.component.html',
	styleUrls: ['./modal-planoConta.component.css']
})
export class ModalPlanoContaComponent implements OnInit {

	planoConta: PlanoConta = new PlanoConta();
	masks = Masks;

	constructor(
		public dialogRef: MatDialogRef<ModalPlanoContaComponent>,
		@Optional() @Inject(MAT_DIALOG_DATA) public data: PlanoConta,
		private genericService: GenericService,
		private planoContaService: PlanoContaService,
		public snackBar: MatSnackBar
	) { }

	ngOnInit() {
		if (this.data)
			this.planoConta = this.data;
	}

	openSnackBar(message: string, action: string) {
		this.snackBar.open(message, action, {
			duration: 10000,
		});
	}

}
