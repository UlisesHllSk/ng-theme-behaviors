import { Input, Component, ChangeDetectorRef } from '@angular/core';

import { controlValueAccesorMixin } from './control-value-accesor.mixin';
import { IsFormFieldInterface } from './is-form-field';
import { canDisableMixin } from '../disable/can-disable.mixin';
import { CanDisable } from '../disable/can-disable';

/**
 * Base class for form fields components
 */
@Component({ template: ''})
export class FormControlBaseComponent extends canDisableMixin(CanDisable) implements IsFormFieldInterface {
  /** Indicates the label of the component */
  label: string;

  /** Hint que se muestra debajo del campo del lado izquierdo */
  hintStart: string;

  /** Hint que se muestra debajo del componente del lado derecho */
  hintEnd: string;

  /** Component's value */
  value = null;

  constructor(
    public changeDetectorRef: ChangeDetectorRef
  ) {
    super();
  }

}

export const FormFieldMixinBase = controlValueAccesorMixin(FormControlBaseComponent);
