import { Constructor } from '../constructor';
import { ICanDisable } from './can-disable';

export function canDisableMixin<T extends Constructor<{}>>(base: T): Constructor<ICanDisable> & T {

  class Temporary extends base {

    isDisabled = false;

  }
  return Temporary;
}
