import { Component, OnInit } from '@angular/core';
import { Venda } from '../../models/venda';
import { GenericService } from '../../services/generic/generic.service';
import { VendaService } from '../../services/venda/venda.service';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth/auth.service';
import { MatSnackBar, MatDialog } from '@angular/material';
import { CarrinhoService } from '../../services/carrinho/carrinho.service';
import { CarrinhoComponent } from '../carrinho/carrinho.component';
import { ConfirmDialogService } from '../../components/common/confirm-dialog/confirm-dialog.service';
import { Produto } from '../../models/produto';

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
    private carrinhoService: CarrinhoService,
    private router: Router,
    private authService: AuthService,
    public snackBar: MatSnackBar,
    private dialog: MatDialog,
    public confirmDialogService: ConfirmDialogService
  ) { }
  
  ngOnInit() {
    this.findAll();
  }
  
  findAll() {
      this.vendaService.findAll().subscribe(venda => {
        this.vendas = <Venda[]>venda;
        this.filteredVendas = Object.assign([], this.vendas);
        if (this.filteredVendas) {
          this.filteredVendas.forEach(outraVenda => {
            if (outraVenda && outraVenda.produtos && outraVenda.produtos.length) {
              outraVenda.produtos.forEach(vendaProduto => {
                if (vendaProduto && vendaProduto.produto) {
                  const produto = new Produto();
                  produto.id = `${vendaProduto.produto}`;
                  vendaProduto.produto = produto;
                }
              });
            }
          });
        }
      }, err => {
        this.openSnackBar("Não foi possível carregar vendas", "OK");
      });
  }

  private limparFiltro(): void {
    this.filteredVendas = Object.assign([], this.vendas);
  }
  
  newVenda() {
      this.selectedVenda = new Venda();
    }
  
  delete(venda: Venda) {
    this.confirmDialogService.confirm(
      'Confirmação',
      `Você tem ceteza que deseja remover essa venda?`)
      .subscribe(res => {
        if (res) {
          this.vendaService.delete(venda.id).subscribe(venda => {
            this.openSnackBar("Removida com sucesso", "OK");
            this.findAll();
          }, err => {
            this.openSnackBar("Não foi possível remover a venda", "OK");
          });
        }
      });
  }  

  onDataChange(novaData): void {
    if (!novaData) {
      this.limparFiltro();
    } else {
      this.filteredVendas = this.vendas.filter(venda => {
        const novaDataStr = novaData.toLocaleString();
        if (novaDataStr.length > 10 && venda.data.length > 10) {
          return novaDataStr.substring(0, 10) === venda.data.substring(0, 10);
        } else {
          return novaDataStr === venda.data;
        }
      });
    }
  }
  
  openSnackBar(message: string, action: string) {
      this.snackBar.open(message, action, {
        duration: 10000,
      });
  }

  save(venda: Venda) {
      this.vendaService.save(venda).subscribe(venda => {
        this.openSnackBar("Salva com sucesso", "OK");
        this.findAll();
      }, err => {
        this.openSnackBar("Não foi possível salvar a venda", "OK");
      });
    }
  
  openDialog(venda): void {
      let dialogRef = this.dialog.open(CarrinhoComponent, {
        data: venda
      });
  
  
      dialogRef.afterClosed().subscribe(result => {
        if (result) {
          this.save(result);
        }
      });

      // this.router.navigate(['carrinho']);
    }
  
}
