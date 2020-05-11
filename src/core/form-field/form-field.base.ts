import { Input, Component, ChangeDetectorRef } from '@angular/core';

import { controlValueAccesorMixin } from './control-value-accesor.mixin';
import { IsFormField } from './is-form-field';

/**
 * Base class for form fields components
 */
@Component({ template: ''})
export class FormControlBaseComponent implements IsFormField {
  /** Indicates the label of the component */
  label: string;

  /** Hint que se muestra debajo del campo del lado izquierdo */
  hintStart: string;

  /** Hint que se muestra debajo del componente del lado derecho */
  hintEnd: string;

  /** Component's value */
  value = null;

  /** Indicates if the state of the component is _disabled_ */
  isDisabled = false;

  constructor(
    public changeDetectorRef: ChangeDetectorRef
  ) {

  }

}

export const FormFieldMixinBase = controlValueAccesorMixin(FormControlBaseComponent);
