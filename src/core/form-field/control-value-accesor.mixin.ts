import { ControlValueAccessor } from '@angular/forms';

import { Constructor } from '../constructor';
import { IsFormFieldInterface } from './is-form-field';

export interface HasControlValueAccessor extends ControlValueAccessor {
  onChange: (_: any) => any;
  onTouched: () => any;
  onInput: (value: any) => any;
}

/** Mixin to augment a component with Dynamic Forms support */
export function controlValueAccesorMixin<T extends Constructor<IsFormFieldInterface>>(base: T): Constructor<HasControlValueAccessor> & T {
  return class extends base {

    onChange = (_: any) => { };

    onTouched = () => { };

    writeValue(value: any): void {
      this.value = value || '';
      this.changeDetectorRef.markForCheck();
    }

    registerOnChange(fn: any): void {
      this.onChange = fn;
    }

    registerOnTouched(fn: any): void {
      this.onTouched = fn;
    }

    setDisabledState(isDisabled: boolean): void {
      this.isDisabled = isDisabled;
    }

    onInput(value: any) {
      this.value = value;
      this.onTouched();
      this.onChange(this.value);
    }
  };

}
