import { Categoria } from './../../../models/categoria';
import { MdDialogRef, MD_DIALOG_DATA } from '@angular/material';
import { Component, OnInit, Inject, Optional } from '@angular/core';

@Component({
	selector: 'app-modal',
	templateUrl: './modal.component.html',
	styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {
	categoria: Categoria = new Categoria();

	constructor(
		public dialogRef: MdDialogRef<ModalComponent>,
		@Optional() @Inject(MD_DIALOG_DATA) public data: Categoria
	) { }

	ngOnInit() {
		if (this.data) 
			this.categoria = this.data;
		
	}

}
