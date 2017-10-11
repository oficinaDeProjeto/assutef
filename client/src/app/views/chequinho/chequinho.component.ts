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
	elementType = 'svg';
	value = '23350057715';
	format = 'CODE128';
	lineColor = '#000000';
	width = 2;
	height = 50;
	displayValue = true;
	fontOptions = '';
	font = 'monospace';
	textAlign = 'center';
	textPosition = 'bottom';
	textMargin = 2;
	fontSize = 0;
	background = '#ffffff';
	margin = 10;
	marginTop = 10;
	marginBottom = 10;
	marginLeft = 10;
	marginRight = 10;
  
	get values(): string[] {
	  return this.value.split('\n');
	}
}