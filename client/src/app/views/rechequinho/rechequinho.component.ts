import { Component, OnInit, ViewChild } from '@angular/core';
import { Associado } from '../../models/associado';
import { Chequinho } from '../../models/chequinho';
import { ChequinhoService } from '../../services/chequinho/chequinho.service';
import { AssociadoService } from '../../services/associado/associado.service';
import { MatSnackBar, MatSelectionList } from '@angular/material';
import { FormControl } from '@angular/forms';
import {Observable} from 'rxjs/Observable';
import {startWith} from 'rxjs/operators/startWith';
import {map} from 'rxjs/operators/map';

@Component({
  selector: 'app-rechequinho',
  templateUrl: './rechequinho.component.html',
  styleUrls: ['./rechequinho.component.css']
})
export class RechequinhoComponent implements OnInit {

  associados : Associado[] = [];
  chequinhos : Chequinho[] = [];

  test: any;

  //config do auto complebosta
  stateCtrl = new FormControl();
  assFiltrado: Observable<Associado[]>;

  associadoSelecionado : Associado;
  @ViewChild(MatSelectionList) chequinhosSelected: MatSelectionList;

  constructor(
    private chequinhoService: ChequinhoService,
		private associadoService: AssociadoService,
		public snackBar: MatSnackBar) {
      
     
    }

    carregarChequinhos():void{
      this.chequinhoService.findLastResultsByAssociado(this.associadoSelecionado.id).subscribe(cheq => {
        this.chequinhos = cheq;
      });
    }

  ngOnInit() {
    this.carregarAssociados();
    this.assFiltrado = this.stateCtrl.valueChanges
    .pipe(
      startWith({} as Associado),
      map(user => user && typeof user === 'object' ? user.nome : user),
      map(name => name ? this.filter(name) : this.associados.slice())
    );
  }

  carregarAssociados(): void{
    this.associadoService.findAll().subscribe(a => {
      this.associados = a;
    }, err =>{
      console.log("fk");
    });
  }

  filter(val): Associado[] {
    return this.associados.filter(ass =>
      ass.nome.toLowerCase().indexOf(val.toLowerCase()) === 0);      
  }

  displayFn(ass: Associado): string {
    return ass ? ass.nome : "";
  }

  openSnackBar(message: string, action: string) {
		this.snackBar.open(message, action, {
			duration: 10000,
		});
  }
  batata():void{
    console.log(this.chequinhosSelected.selectedOptions.selected.toLocaleString);
    
  }


}
