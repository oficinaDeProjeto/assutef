import { Component, OnInit,  Optional, Inject } from '@angular/core';
import { MatIconRegistry, MatDialog } from "@angular/material";
import { DomSanitizer } from '@angular/platform-browser';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ModalGrupousuarioComponent } from './modal/modal-grupouser.component';
import { Grupousuario } from './../../models/Grupousuario';
import { GrupousuarioService } from './../../services/grupousuario/grupousuario.service';
import { ConfirmDialogService } from './../../components/common/confirm-dialog/confirm-dialog.service';
import { GenericService } from './../../services/generic/generic.service';
import { AuthService } from './../../services/auth/auth.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material';



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
	grupousuario: Grupousuario = new Grupousuario();
	grupousuarios : Grupousuario[] = [];
	filteredGrupousuarios: Grupousuario[] = [];
	selectedGrupousuario = new Grupousuario();
	
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
// To avoid XSS attacks, the URL needs to be trusted from inside of your application.
const avatarsSafeUrl = sanitizer.bypassSecurityTrustResourceUrl('./assets/avatars.svg');
iconRegistry.addSvgIconSetInNamespace('avatars', avatarsSafeUrl);
  }

  openGrupouser(grupousuario): void{
		let dialogRef = this.dialog.open(ModalGrupousuarioComponent, {
			data: grupousuario
		});

		dialogRef.afterClosed().subscribe(result => {
			console.log(result);
			//this.salvarCategoria(result);
		});
  }
  
  openNewGrupousuarioDialog(grupousuario: Grupousuario): void {
		let dialogRef = this.dialog.open(ModalGrupousuarioComponent, {
			data: grupousuario
		});

		dialogRef.afterClosed().subscribe(result => {
			console.log(result);
			this.salvarGrupousuario(result);
		});
	}

  ngOnInit() {
    this.getAll();
  }

  getAll() {
		this.grupousuarioService.getAll().subscribe(grupousuarios => {
			this.grupousuarios = <Grupousuario[]>grupousuarios;
			this.filteredGrupousuarios = Object.assign([], this.grupousuarios);
			this.selectedGrupousuario = this.grupousuarios[0];
		}, err => {
			this.openSnackBar("Não foi possível carregar os grupos de usuários", "OK");
		});
	}
  isDarkTheme = false;
  



	newGrupousuario() {
		this.selectedGrupousuario = new Grupousuario();
	}

	assignCopy() {
		this.filteredGrupousuarios = Object.assign([], this.grupousuario);
	}

	filterConveniado(query) {
		if (!query) {
			this.filteredGrupousuarios = Object.assign([], this.grupousuarios);
		} else {
			this.filteredGrupousuarios = Object.assign([], this.grupousuarios).filter(
				grupousuario => grupousuario.nome.toLowerCase().indexOf(query.toLowerCase()) > -1
			)
		}
	}


	openSnackBar(message: string, action: string) {
		this.snackBar.open(message, action, {
			duration: 10000,
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

}
