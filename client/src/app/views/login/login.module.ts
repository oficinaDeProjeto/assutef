import { FlexLayoutModule } from '@angular/flex-layout';
import { NgModule } from "@angular/core";
import { LoginComponent } from './login.component';
import { AuthService } from '../../services/auth/auth.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatCardModule, MatInputModule, MatButtonModule } from '@angular/material';

@NgModule({
    declarations: [LoginComponent],
    exports: [LoginComponent],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule,
        MatCardModule,
        MatInputModule,
        FlexLayoutModule,
        MatButtonModule
    ],
    providers: [
        AuthService
    ],
})

export class LoginModule { }
