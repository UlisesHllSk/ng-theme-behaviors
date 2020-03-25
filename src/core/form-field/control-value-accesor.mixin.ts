import { ControlValueAccessor } from '@angular/forms';

import { Constructor } from '../constructor';
import { IsFormField } from './is-form-field';


/** Mixin to augment a component with Dynamic Forms support */
export function controlValueAccesorMixin<T extends Constructor<IsFormField>>(base: T): Constructor<ControlValueAccessor> & T {
  return class extends base {

    onChange = (_: any) => { };

    onTouch = () => { };

    writeValue(value: any): void {
      this.value = value || '';
      this.changeDetectorRef.markForCheck();
    }

    registerOnChange(fn: any): void {
      this.onChange = fn;
    }

    registerOnTouched(fn: any): void {
      this.onTouch = fn;
    }

    setDisabledState(isDisabled: boolean): void {
      this.isDisabled = isDisabled;
    }
  };

}
