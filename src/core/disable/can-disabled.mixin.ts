import { Constructor } from '../constructor';
import { CanDisable } from './can-disabled';

export function canDisableMixin<T extends Constructor<{}>>(base: T): Constructor<CanDisable> & T {
  return class extends base {
    isDisabled = false;
  };
}
