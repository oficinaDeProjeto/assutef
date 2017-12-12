import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog, MatSnackBar, MatPaginator } from '@angular/material';
import { Tipoconveniado } from '../../models/tipoconveniado';
import { ModalTipoconveniadoComponent } from './modal/modal-tipoconveniado.component';
import { GenericService } from '../../services/generic/generic.service';
import { AuthService } from '../../services/auth/auth.service';
import { TipoconveniadoService } from '../../services/tipoconveniado/tipoconveniado.service';
import { ConfirmDialogService } from '../../components/common/confirm-dialog/confirm-dialog.service';

@Component({
  selector: 'app-tipoconveniado',
  templateUrl: './tipoconveniado.component.html',
  styleUrls: ['./tipoconveniado.component.css']
})
export class TipoconveniadoComponent implements OnInit {

	@ViewChild(MatPaginator) paginator: MatPaginator;

	tipoconveniado: Tipoconveniado = new Tipoconveniado();
	tipoconveniados: Tipoconveniado[] = [];
	selectedTipoconveniado: Tipoconveniado = new Tipoconveniado;
	filteredTipoconveniados: Tipoconveniado[] = [];
	finalTipoconveniados: Tipoconveniado[] = [];

	constructor(
		private genercService: GenericService,
			private tipoconveniadoService: TipoconveniadoService,
			private router: Router,
			private authService: AuthService,
			public snackBar: MatSnackBar,
			public confirmDialogService: ConfirmDialogService,
			public dialog: MatDialog
	) { }

	ngOnInit() {
			this.getAll();
	}

	getAll() {
		this.tipoconveniadoService.findAll().subscribe(tipoconveniados => {
			this.tipoconveniados = <Tipoconveniado[]>tipoconveniados;
			this.filteredTipoconveniados = Object.assign([], this.tipoconveniados);
			this.filterTipoconveniado("");
		}, err => {
			console.log(err);
		});
	}

	salvarTipoconveniado(tipoconveniado: Tipoconveniado) {
		this.tipoconveniadoService.save(tipoconveniado).subscribe(tipoconveniado => {
			this.openSnackBar("Salvo com sucesso", "OK");
			this.getAll();
		}, err => {
			this.openSnackBar("Não foi possível salvar o tipo conveniado", "OK");
		});
	}

	newTipoconveniado() {
		this.selectedTipoconveniado = new Tipoconveniado();
	}

	assignCopy() {
		this.filteredTipoconveniados = Object.assign([], this.tipoconveniado);
	}

	filterTipoconveniado(query) {
		if (!query) {
			this.filteredTipoconveniados = Object.assign([], this.tipoconveniados);
		} else {
			this.filteredTipoconveniados = Object.assign([], this.tipoconveniados).filter(
				tipoconveniado => tipoconveniado.descricao.toLowerCase().indexOf(query.toLowerCase()) > -1
			)
		}
		this.finalTipoconveniados = this.filteredTipoconveniados.slice(0, Math.min(this.filteredTipoconveniados.length, this.paginator.pageSize));
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

	delete(tipoconveniado: Tipoconveniado) {
		this.confirmDialogService.confirm(
			'Confirmação',
			`Você tem ceteza que deseja remover o Tipo Conveniado ${tipoconveniado.descricao}?`)
			.subscribe(res => {
				if (res) {
					this.tipoconveniadoService.delete(tipoconveniado.id).subscribe(tipoconveniado => {
						this.openSnackBar("Removido com sucesso", "OK");
						this.getAll();
					}, err => {
						this.openSnackBar("Não foi possível remover o tipo Conveniado", "OK");
					})
				}
			}
		);
	}

	openSnackBar(message: string, action: string) {
		this.snackBar.open(message, action, {
			duration: 10000,
		});
	}

	onPaginateChange(event):void{
		let startIndex = event.pageIndex * event.pageSize;
		let endIndex = Math.min(startIndex + this.paginator.pageSize, this.filteredTipoconveniados.length);
		this.finalTipoconveniados = this.filteredTipoconveniados.slice(startIndex, endIndex);		
	 }
}
