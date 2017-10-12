import { Component, OnInit } from '@angular/core';
import { Conveniado } from 'app/models/conveniado';
import { Tipoconveniado } from 'app/models/tipoConveniado';
import { GenericService } from 'app/service/generic/generic.service';
import { Router } from '@angular/router';
import { AuthService } from 'app/service/auth/auth.service';
import { MdDialog } from '@angular/material';
import { ModalConveniadoComponent } from 'app/views/conveniado/modal/modal-conveniado.component';

@Component({
  selector: 'app-conveniado',
  templateUrl: './conveniado.component.html',
  styleUrls: ['./conveniado.component.css']
})
export class ConveniadoComponent implements OnInit {

  conveniado: Conveniado = new Conveniado();
	conveniados: Conveniado[] = [];
	selectedConveniado: Conveniado = new Conveniado;
	filteredConveniados: Conveniado[] = [];

	tipoconveniado: Tipoconveniado = new Tipoconveniado();
	tipoconveniados: Tipoconveniado[] = [];
	selectedTipoConveniado: Tipoconveniado = new Tipoconveniado;
	filteredTipoConveniados: Tipoconveniado[] = [];

  constructor(
    private genercService: GenericService,
		private router: Router,
		private authService: AuthService,
		public dialog: MdDialog) { 
    
  }

  ngOnInit() {
    this.getAll();
  }

  getAll() {
		this.genercService.getAll('conveniado').subscribe(conveniados => {
			this.conveniados = <Conveniado[]>conveniados;
			this.filteredConveniados = Object.assign([], this.conveniados);
		}, err => {
			console.log(err);
		});
	}

	getAllTipoConveniados() {
		this.genercService.getAll('tipoconveniado').subscribe(tipoconveniados => {
			this.tipoconveniados = <Tipoconveniado[]>tipoconveniados;
		}, err => {
			console.log(err);
		});
	}

	salvarConveniado(conveniado: Conveniado) {
		this.genercService.save('conveniado', conveniado).subscribe(conveniado => {
			console.log('Salvo com sucesso');
			this.getAll();
		}, err => {
			console.log(err);
		});
	}

	newConveniado() {
		this.selectedConveniado = new Conveniado();
	}

	assignCopy() {
		this.filteredConveniados = Object.assign([], this.conveniado);
	}

	filterConveniado(query) {
		if (!query) {
			this.filteredConveniados = Object.assign([], this.conveniados);
		} else {
			this.filteredConveniados = Object.assign([], this.conveniado).filter(
				conveniado => conveniado.razaosocial.toLowerCase().indexOf(query.toLowerCase()) > -1
			)
		}
	}

	openDialog(conveniado: Conveniado): void {
		let dialogRef = this.dialog.open(ModalConveniadoComponent, {
			data: conveniado
		});

		dialogRef.afterClosed().subscribe(result => {
			console.log(result);
			this.salvarConveniado(result);
		});
	}
}
