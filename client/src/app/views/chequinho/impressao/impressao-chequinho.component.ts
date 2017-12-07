import { AssociadoService } from './../../../services/associado/associado.service';
import { Masks } from './../../../services/constantes';
import { GenericService } from './../../../services/generic/generic.service';
import { Associado } from './../../../models/associado';
import { Chequinho } from './../../../models/chequinho';
import { MAT_DIALOG_DATA, MatDialogRef, MatSnackBar } from '@angular/material';
import { Component, OnInit, Optional, Inject, ElementRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ChequinhoService } from '../../../services/chequinho/chequinho.service';
import { Observable } from 'rxjs';
declare var jQuery: any;
@Component({
	selector: 'app-impressao-chequinho',
	templateUrl: './impressao-chequinho.component.html',
	styleUrls: ['./impressao-chequinho.component.css']
})
export class ImpressaoChequinhoComponent implements OnInit {

	chequinhos: Chequinho[] = [];
	associado: Associado = new Associado();
	qtdeChequinho: Number;
	masks = Masks;
	private el: ElementRef;

	constructor(
		@Optional() @Inject(MAT_DIALOG_DATA) public dataAssociado: Associado,
		@Optional() @Inject(MAT_DIALOG_DATA) public dataChequinho: Chequinho,
		private route: ActivatedRoute,
		private associadoService: AssociadoService,
		public snackBar: MatSnackBar,
		private chequinhoService: ChequinhoService,
		@Inject(ElementRef) el: ElementRef,
	) {
		this.el = el;
	 }		 

	ngOnInit() {	
		this.tratarIDSChequinhos(this.route.snapshot.params["ids"]);	
	}

	tratarIDSChequinhos(str : string):void{
		let observables : any = [];
		for(let id of str.split("~")){ //Separar os ids que vieram concatenados para printar corretamente em tela
			observables.push(this.chequinhoService.findById(id));		
		}

		Observable.forkJoin(observables).subscribe((response) => { 
			for(let chequinho of response) {
				this.chequinhos.push(<Chequinho>chequinho);
			}
			setTimeout(function(){ //Abre a tela de impressão
				this.print();
			}, 3000);
		});
	}

	openSnackBar(message: string, action: string) {
		this.snackBar.open(message, action, {
			duration: 10000,
		});
	}

	/**
	 * Busca chequinho por id.
	 * @param id i
	 */
	getChequinhoById(id: string) : Chequinho {
		
		return null;
	}

	print() {
		let container = this.el.nativeElement;
		let conteudo = container.firstElementChild.innerHTML;

		conteudo += `<style></style>`;
		let tela_impressao = window.open('about:blank');
		tela_impressao.document.write(conteudo);

		setTimeout(function () {
			tela_impressao.window.print();
			tela_impressao.window.close();
		}, 200);
	}
}
