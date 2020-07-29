import { Constructor } from '../constructor';
import { CanDisableInterface } from './can-disable';

export function canDisableMixin<T extends Constructor<{}>>(base: T): Constructor<CanDisableInterface> & T {

  return class extends base {

    isDisabled = false;

  };
}
