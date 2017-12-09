import { Component, OnInit, Optional, Inject, ViewChild } from '@angular/core';
import { MatIconRegistry } from "@angular/material";
import { DomSanitizer } from '@angular/platform-browser';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatDialog, MatSnackBar, MatPaginator } from '@angular/material';
import { ModalGrupousuarioComponent } from './modal/modal-grupouser.component';
import { Grupousuario } from './../../models/Grupousuario';
import { GrupousuarioService } from './../../services/grupousuario/grupousuario.service';
import { ConfirmDialogService } from './../../components/common/confirm-dialog/confirm-dialog.service';
import { GenericService } from './../../services/generic/generic.service';
import { AuthService } from './../../services/auth/auth.service';
import { Router } from '@angular/router';



import {
  MatDialogModule,
  MatCardModule,
  MatInputModule,
  MatButtonModule,
  MatIconModule,
  MatStepperModule,
  MatSelectModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatRadioModule,
  MatSnackBarModule,
  MatTooltipModule
} from "@angular/material";



@Component({
  selector: 'app-grupousuario',
  templateUrl: './grupousuario.component.html',
  styleUrls: ['./grupousuario.component.css'],
  
})
export class GrupousuarioComponent implements OnInit {

	@ViewChild(MatPaginator) paginator: MatPaginator;

	
	grupousuario: Grupousuario = new Grupousuario();
	grupousuarios : Grupousuario[] = [];
	selectedGrupousuario: Grupousuario  = new Grupousuario;
	filteredGrupousuarios: Grupousuario[] = [];
	finalGrupoUsuarios: Grupousuario[] = [];
	
		
  constructor(
    iconRegistry: MatIconRegistry, 
		sanitizer: DomSanitizer, 
		private grupousuarioService: GrupousuarioService,
        private genericService: GenericService,
		private router: Router,
		private authService: AuthService,
		public dialog: MatDialog,
		public snackBar: MatSnackBar,
		public confirmDialogService: ConfirmDialogService
  ) { 
  }

	ngOnInit() {
    this.getAll();
	}
	
	

	getAll() {
		this.grupousuarioService.getAll().subscribe(grupousuarios => {
			this.grupousuarios = <Grupousuario[]>grupousuarios;
			this.filteredGrupousuarios = Object.assign([], this.grupousuarios); 
			this.filterGrupousuario("");
		
		}, err => {
			this.openSnackBar("Não foi possível carregar os grupos de usuários", "OK");
		});
	}
 // isDarkTheme = false;



	newGrupousuario() {
		this.selectedGrupousuario = new Grupousuario();
	}

	assignCopy() {
		this.filteredGrupousuarios = Object.assign([], this.grupousuario);
	}
	
	

	filterGrupousuario(query) {
		if (!query) {
			this.filteredGrupousuarios = Object.assign([], this.grupousuarios);
		} else {
			this.filteredGrupousuarios = Object.assign([], this.grupousuarios).filter(
				grupousuario => grupousuario.nome.toLowerCase().indexOf(query.toLowerCase()) > -1
			)
		}
		this.finalGrupoUsuarios = this.filteredGrupousuarios.slice(0, Math.min(this.filteredGrupousuarios.length, this.paginator.pageSize));
	}

  openNewGrupousuarioDialog(grupousuario: Grupousuario): void {
		let dialogRef = this.dialog.open(ModalGrupousuarioComponent, {
			data: grupousuario
		});
		dialogRef.afterClosed().subscribe(result => {
		//	console.log(result);
			this.salvarGrupousuario(result);
		});
	}

	
	/**
	 * Valida se é mesmo a intenção do usuário, caso sim remove um grupo da base
	 * @param grupousuario grupousuario passado por parametro direto da View
	 */
	delete(grupousuario: Grupousuario) {
		this.confirmDialogService.confirm(
			'Confirmação',
			`Você tem ceteza que deseja remover o grupo ${grupousuario.nome}?`)
			.subscribe(res => {
				if (res) {
					this.grupousuarioService.delete(grupousuario.id).subscribe(grupousuario => {
						this.openSnackBar("Removido com sucesso", "OK");
						this.getAll();
					}, err => {
						this.openSnackBar("Não foi possível remover o grupo de usuário", "OK");
					})
				}
			});
	}

	salvarGrupousuario(grupousuario: Grupousuario) {
		this.grupousuarioService.save(grupousuario).subscribe(grupousuario => {
			this.openSnackBar("Salvo com sucesso", "OK");
			this.getAll();
		}, err => {
			this.openSnackBar("Não foi possível salvar o grupo de usuário", "OK");
		});
	}

	openSnackBar(message: string, action: string) {
		this.snackBar.open(message, action, {
			duration: 10000,
		});
	}

	onPaginateChange(event):void{
		let startIndex = event.pageIndex * event.pageSize;
		let endIndex = Math.min(startIndex + this.paginator.pageSize, this.filteredGrupousuarios.length);
		this.finalGrupoUsuarios = this.filteredGrupousuarios.slice(startIndex, endIndex);
		
	 }

	 

}
