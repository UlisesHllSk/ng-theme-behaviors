import { Constructor } from '../constructor';
import { ICanDisable } from './can-disabled';
import { Input } from '@angular/core';

export function canDisableMixin<T extends Constructor<{}>>(base: T): Constructor<ICanDisable> & T {

  class Temporary extends base {

    @Input()
    isDisabled = false;

  }
  return Temporary;
}
