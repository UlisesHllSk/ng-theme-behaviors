import { ElementRef } from '@angular/core';
import { Constructor } from '../constructor';
import { CanColor } from './can-color';

interface HasElementRef {
  elementRef: ElementRef;
  prefixColor: string;
}

export function canColorMixin<T extends Constructor<HasElementRef>>(base: T): Constructor<CanColor> & T {
  return class extends base {
    private themeColor: string;

    get color() { return this.themeColor; }

    set color(value: string) {
      const colorPalette = value;

      if (colorPalette != this.themeColor) {
        if (this.themeColor) {
          this.elementRef.nativeElement.classList.remove(`${this.prefixColor}${this.themeColor}`);
        }
        if (colorPalette) {
          this.elementRef.nativeElement.classList.add(`${this.prefixColor}${colorPalette}`);
        }

        this.themeColor = colorPalette;
      }
    }

    constructor(...args: any[]) {
      super(args);
    }
  };
}
