import {Component, OnInit, ElementRef, ViewChild} from '@angular/core';
import {DataSource} from '@angular/cdk/collections';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {Observable} from 'rxjs/Observable';
import { Lancamento } from '../../models/lancamento';
import { Associado } from '../../models/associado';
import { AssociadoService } from '../../services/associado/associado.service'
import 'rxjs/add/operator/startWith';
import 'rxjs/add/observable/merge';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/observable/fromEvent';

@Component({
  selector: 'app-lancamento',
  templateUrl: './lancamento.component.html',
  styleUrls: ['./lancamento.component.css']
})
export class LancamentoComponent implements OnInit {

  associados: Associado[] = [];
  lancamento: Lancamento = new Lancamento();
  
  constructor(
    private associadoService: AssociadoService
    
  ) {
   }

  @ViewChild('filter') filter: ElementRef;

  ngOnInit() {
    this.getAllAssociados();
  }  

  getAllAssociados(){
		this.associadoService.findAll().subscribe(a => {
			this.associados = <Associado[]> a;
		}, err => {
			console.log("Erro ao listar associados");			
		});
  }
  
  

}
