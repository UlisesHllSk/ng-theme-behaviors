import { Constructor } from '../constructor';
import { CanColor } from './can-color';
import { IHasColor } from './has-color';

export function canColorMixin<T extends Constructor<IHasColor>>(base: T): Constructor<CanColor> & T {
  return class extends base {
    private themeColor: string;

    get color() { return this.themeColor; }

    set color(value: string) {
      const colorPalette = value;

      if (colorPalette != this.themeColor) {
        if (this.themeColor) {
          this.elementRef.nativeElement.classList.remove(`${this.prefixTheme}${this.themeColor}`);
        }
        if (colorPalette) {
          this.elementRef.nativeElement.classList.add(`${this.prefixTheme}${colorPalette}`);
        }

        this.themeColor = colorPalette;
      }
    }

    constructor(...args: any[]) {
      super(...args);
    }
  };
}
