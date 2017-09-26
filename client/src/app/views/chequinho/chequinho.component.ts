import { GenericService } from 'app/service/generic/generic.service';
import { Component, OnInit } from '@angular/core';
import { Chequinho } from "app/models/chequinho";

@Component({
	selector: 'app-chequinho',
	templateUrl: './chequinho.component.html',
	styleUrls: ['./chequinho.component.css']
})
export class ChequinhoComponent implements OnInit {
	chequinhos: Chequinho[] = [];
	
	constructor(
		private genericService: GenericService,
	) { }

	ngOnInit() {
		this.getAll();
	}
	
	getAll() {
		this.genericService.getAll('chequinho').subscribe(chequinhos => {
			this.chequinhos = <Chequinho[]>chequinhos;
		}, err => {
			console.log(err);
		})
	}
}
