import { Component, ChangeDetectorRef, Injector } from '@angular/core';

import { controlValueAccesorMixin } from './control-value-accesor.mixin';
import { IsFormFieldInterface } from './is-form-field';
import { canDisableMixin } from '../disable/can-disable.mixin';

/**
 * Base class for form fields components
 */
@Component({ template: ''})
export class FormControlBaseComponent implements IsFormFieldInterface {
  /** Indicates the label of the component */
  label: string;

  /** Component's value */
  value = null;

  /** Disabled component's flag */
  isDisabled: boolean;

  /** Change detector */
  changeDetectorRef: ChangeDetectorRef;

  constructor(
    public injector: Injector
  ) {
    this.changeDetectorRef = injector.get(ChangeDetectorRef);
  }

}

export const FormFieldMixinBase = controlValueAccesorMixin(canDisableMixin(FormControlBaseComponent));
