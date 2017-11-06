import { PlanoContaService } from './../../services/planoConta/planoConta.service';
import { AuthService } from './../../services/auth/auth.service';
import { PlanoContaComponent } from './plano-conta.component';
import { MatButtonModule } from '@angular/material';
import { MatInputModule } from '@angular/material';
import { MatCardModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@NgModule({
    declarations: [PlanoContaComponent],
    exports: [PlanoContaComponent],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        MatCardModule,
        MatInputModule,
        MatButtonModule
       
    ],
    providers: [AuthService, PlanoContaService]
})

export class PlanoContaModule { }
