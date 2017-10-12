import { Component, OnInit } from '@angular/core';
import { Tipoconveniado } from 'app/models/tipoConveniado';
import { GenericService } from 'app/service/generic/generic.service';
import { Router } from '@angular/router';
import { AuthService } from 'app/service/auth/auth.service';
import { MdDialog } from '@angular/material';
import { ModalTipoconveniadoComponent } from 'app/views/tipoconveniado/modal/modal-tipoconveniado.component';

@Component({
  selector: 'app-tipoconveniado',
  templateUrl: './tipoconveniado.component.html',
  styleUrls: ['./tipoconveniado.component.css']
})
export class TipoconveniadoComponent implements OnInit {

  tipoconveniado: Tipoconveniado = new Tipoconveniado();
	tipoconveniados: Tipoconveniado[] = [];
	selectedTipoConveniado: Tipoconveniado = new Tipoconveniado;
	filteredTipoConveniados: Tipoconveniado[] = [];

  constructor(
    private genercService: GenericService,
		private router: Router,
		private authService: AuthService,
		public dialog: MdDialog
  ) { }

  ngOnInit() {
		this.getAll();
	}


	getAll() {
		this.genercService.getAll('tipoconveniado').subscribe(tipoconveniados => {
			this.tipoconveniados = <Tipoconveniado[]>tipoconveniados;
			this.filteredTipoConveniados = Object.assign([], this.tipoconveniados);
		}, err => {
			console.log(err);
		});
	}

	salvarTipoconveniado(tipoconveniado: Tipoconveniado) {
		this.genercService.save('tipoconveniado', tipoconveniado).subscribe(tipoconveniado => {
			console.log('Salvo com sucesso');
			this.getAll();
		}, err => {
			console.log(err);
		});
	}

	newTipoconveniado() {
		this.selectedTipoConveniado = new Tipoconveniado();
	}

	assignCopy() {
		this.filteredTipoConveniados = Object.assign([], this.tipoconveniado);
	}

	filterTipoconveniado(query) {
		if (!query) {
			this.filteredTipoConveniados = Object.assign([], this.tipoconveniados);
		} else {
			this.filteredTipoConveniados = Object.assign([], this.tipoconveniado).filter(
				tipoconveniado => tipoconveniado.descricao.toLowerCase().indexOf(query.toLowerCase()) > -1
			)
		}
	}

	openDialog(tipoconveniado: Tipoconveniado): void {
		let dialogRef = this.dialog.open(ModalTipoconveniadoComponent, {
			data: tipoconveniado
		});

		dialogRef.afterClosed().subscribe(result => {
			console.log(result);
			this.salvarTipoconveniado(result);
		});
	}

}
