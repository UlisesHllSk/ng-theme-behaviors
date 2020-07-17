import { Constructor } from '../constructor';
import { FormOptions } from '../types/options.type';

export interface IHasOptions {
  trackByValue(index: number, item: FormOptions): (index: number, item: FormOptions) => void;
}

export function hasOptionsMixin<T extends Constructor<{}>>(base: T): Constructor<IHasOptions> {
  return class extends base {
    trackByValue(index: number, item: FormOptions) {
      if (!item) {
        return null;
      }
      return item.value;
    }
  };
}
