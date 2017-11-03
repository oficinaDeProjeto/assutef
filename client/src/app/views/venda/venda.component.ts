import { Component, OnInit } from '@angular/core';
import { Venda } from '../../models/venda';
import { GenericService } from '../../services/generic/generic.service';
import { VendaService } from '../../services/venda/venda.service';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth/auth.service';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-venda',
  templateUrl: './venda.component.html',
  styleUrls: ['./venda.component.css']
})
export class VendaComponent implements OnInit {
  venda: Venda = new Venda();
  vendas: Venda[] = [];
  selectedVenda: Venda = new Venda();
  filteredVendas: Venda[] = [];
  
  constructor(
  private genercService: GenericService,
  private vendaService: VendaService,
  private router: Router,
  private authService: AuthService,
  public snackBar: MatSnackBar
  ) { }
  
  ngOnInit() {
  //this.findAll();
  }
  
  /*findAll() {
      this.vendaService.findAll().subscribe(venda => {
        this.vendas = <Venda[]>venda;
        this.filteredVendas = Object.assign([], this.vendas);
      }, err => {
        this.openSnackBar("Não foi possível carregar associados", "OK");
      });
  }*/
  
  newVenda() {
      this.selectedVenda = new Venda();
    }
  
  
    /*assignCopy() {
      this.filteredVendas = Object.assign([], this.venda);
  }*/
  
    /*filterVenda(query) {
      if (!query) {
        this.filteredVendas = Object.assign([], this.vendas);
      } else {
        this.filteredVendas = Object.assign([], this.venda).filter(
          venda => venda.data.indexOf(query) > -1
        )
      }
  }*/
  
  
  openSnackBar(message: string, action: string) {
      this.snackBar.open(message, action, {
        duration: 10000,
      });
  }

  
  /*save(venda: Venda) {
      this.vendaService.save(venda).subscribe(venda => {
        this.openSnackBar("Salvo com sucesso", "OK");
        this.findAll();
      }, err => {
        this.openSnackBar("Não foi possível salvar associado", "OK");
      });
    }*/
  
  openCarrinho(venda: Venda): void {
      /*let dialogRef = this.dialog.open(ModalAssociadoComponent, {
        data: venda
      });
  
  
      dialogRef.afterClosed().subscribe(result => {
        this.save(result);
  });*/

  this.router.navigate(['carrinho']);
    }
  
}
