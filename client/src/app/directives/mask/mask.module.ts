import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaskDirective } from './mask.directive';
import { MaskService } from './mask.service';

@NgModule({
	exports: [MaskDirective],
	declarations: [
		MaskDirective
	],
	imports: [
		CommonModule
	],
	providers: [
		MaskService
	]
})
export class MaskModule { }
