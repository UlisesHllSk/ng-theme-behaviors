import {
  Input,
  ChangeDetectorRef,
  Optional,
  Inject,
  Component
} from '@angular/core';
import { FormControl } from '@angular/forms';
import { FormControlBaseComponent } from './form-control.base';
import { FIELD_METADATA } from './field-component.base';

/**
 * Clase que sirve para base de los inputs genericos que no son radios ni checksbox.
 */
@Component({template: ''})
export class InputBaseComponent extends FormControlBaseComponent {
  /** Prefijo del campo */
  @Input() prefix: string;

  /** Subfijo del campo */
  @Input() sufix: string;

  /** Icono prefijo */
  @Input() prefixIcon: string;

  /** Icono Sufijo */
  @Input() sufixIcon: string;

  /** Minimo numero de caracteres */
  @Input() min = 0;

  /** Maximo numero de caracteres */
  @Input() max = 50;

  /** Copia del valor del campo */
  protected backupValue = '';

  validateMax = (control: FormControl) => {
    if (
      control.value &&
      control.value.toString().length > this.max
    ) {
      this.control.setValue(
        control.value
          .toString()
          .trim()
          .slice(0, this.max),
        { emitEvent: false }
      );
    }
    return null;
  };

  validateMin = (control: FormControl) => {
    if (
      control.value &&
      control.value.toString().length !== 0 &&
      control.value.toString().length < this.min
    ) {
      return { formerror: true, message: `Mínimo ${this.min} caracteres` };
    } else {
      return null;
    }
  };
}
