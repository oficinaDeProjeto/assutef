import { Chequinho } from './../../models/chequinho';
import { GenericService } from './../../services/generic/generic.service';
import { Component, OnInit } from '@angular/core';
import { ChequinhoService } from '../../services/chequinho/chequinho.service';

@Component({
	selector: 'app-chequinho',
	templateUrl: './chequinho.component.html',
	styleUrls: ['./chequinho.component.css']
})
export class ChequinhoComponent implements OnInit {
	chequinhos: Chequinho[] = [];
	chequinho: Chequinho = new Chequinho();

	constructor(
		private chequinhoService: ChequinhoService,
	) { }

	ngOnInit() {
		this.getAll();
	}
	
	getAll() {
		this.chequinhoService.findAll().subscribe(chequinhos => {
			this.chequinhos = <Chequinho[]>chequinhos;
		}, err => {
			console.log(err);
		})
	}
	gerarChequinho(){
		this.chequinho.descricao = "teste";
		this.chequinhoService.save(this.chequinho).subscribe(chequinho => {
			console.log("nois");
			
		}, err => {
			console.log("fudeu");
		});
	
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
