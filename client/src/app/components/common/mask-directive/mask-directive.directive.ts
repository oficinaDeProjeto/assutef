import { Directive, HostListener, Input } from '@angular/core';
import { NG_VALUE_ACCESSOR } from "@angular/forms/src/directives/control_value_accessor";
import { ControlValueAccessor } from "@angular/forms/src/forms";

/**
 * Exemplo de uso
 * CPF: <input type="text" appMaskDirective="999.999.999-99">
 * CNPJ: <input type="text" appMaskDirective="99.999.999/9999-99">
 * CEP: <input type="text" appMaskDirective="99999-999">
 */
@Directive({
	selector: '[appMaskDirective]',
	providers: [{
		provide: NG_VALUE_ACCESSOR,
		useExisting: MaskDirectiveDirective,
		multi: true
	}]
})
export class MaskDirectiveDirective implements ControlValueAccessor {

	onTouched: any;
	onChange: any;

	@Input('appMaskDirective') appMaskDirective: string;

	writeValue(value: any): void {
	}

	registerOnChange(fn: any): void {
		this.onChange = fn;
	}

	registerOnTouched(fn: any): void {
		this.onTouched = fn;
	}

	@HostListener('keyup', ['$event'])
	onKeyup($event: any) {
		var valor = $event.target.value.replace(/\D/g, '');
		var pad = this.appMaskDirective.replace(/\D/g, '').replace(/9/g, '_');
		var valorMask = valor + pad.substring(0, pad.length - valor.length);
		if ($event.keyCode === 8) {
			this.onChange(valor);
			return;
		}

		if (valor.length <= pad.length) {
			this.onChange(valor);
		}

		var valorMaskPos = 0;
		valor = '';
		for (var i = 0; i < this.appMaskDirective.length; i++) {
			if (isNaN(parseInt(this.appMaskDirective.charAt(i)))) {
				valor += this.appMaskDirective.charAt(i);
			} else {
				valor += valorMask[valorMaskPos++];
			}
		}

		if (valor.indexOf('_') > -1) {
			valor = valor.substr(0, valor.indexOf('_'));
		}

		$event.target.value = valor;
	}

	@HostListener('blur', ['$event'])
	onBlur($event: any) {
		if ($event.target.value.length === this.appMaskDirective.length) {
			return;
		}
		this.onChange('');
		$event.target.value = '';
	}
}