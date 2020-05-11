import { NG_VALUE_ACCESSOR, NG_VALIDATORS } from '@angular/forms';
import { forwardRef } from '@angular/core';
import { FormControlBaseComponent } from '../form-field/form-field.base';


/**
 * Genera los provider para NG_VALUE_ACCESSOR,
 * NG_VALIDATORS y FieldBaseComponent
 * @param componentType Componente al que se le
 * aplicarán los providers
 */
export function fieldsProviders(componentType: any) {
  return [
    valueAccesorProvider(componentType),
    // validatorsProvider(componentType),
    fieldComponentBaseProvider(componentType),
  ];
}

export function valueAccesorProvider(componentType: any) {
  return {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => componentType),
    multi: true
  };
}

export function validatorsProvider(componentType: any) {
  return {
    provide: NG_VALIDATORS,
    useExisting: forwardRef(() => componentType),
    multi: true,
  };
}

export function fieldComponentBaseProvider(componentType: any) {
  return {
    provide: FormControlBaseComponent,
    useExisting: forwardRef(() => componentType),
    multi: true
  };
}
