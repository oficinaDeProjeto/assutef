import { MatButtonModule } from '@angular/material';
import { MatInputModule } from '@angular/material';
import { MatCardModule, MatSelectModule } from '@angular/material';
import { ChequinhoComponent } from './chequinho.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ChequinhoService } from '../../services/chequinho/chequinho.service';
import { AuthService } from '../../services/auth/auth.service';
import { GenericService } from '../../services/generic/generic.service';

@NgModule({
    declarations: [ChequinhoComponent],
    exports: [ChequinhoComponent],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        MatCardModule,
        MatInputModule,
        MatButtonModule,
        MatSelectModule
       
    ],
    providers:[
        AuthService,
        GenericService,
        ChequinhoService
    ]
})

export class ChequinhoModule { }
