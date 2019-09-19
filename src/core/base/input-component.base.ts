import {
  Input,
  ChangeDetectorRef,
  Optional,
  Inject
} from '@angular/core';
import { FormControl } from '@angular/forms';
import { FormControlComponentBase } from './form-control.base';
import { FIELD_METADATA } from './field-component.base';

/**
 * Clase que sirve para base de los inputs genericos que no son radios ni checksbox.
 */
export class InputComponentBase extends FormControlComponentBase {
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

  constructor(
    protected changeDetectorRef: ChangeDetectorRef,
    @Optional() @Inject(FIELD_METADATA) protected metadata: any
  ) {
    super(changeDetectorRef, metadata);
  }

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
