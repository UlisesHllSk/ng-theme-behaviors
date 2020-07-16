import { Injector, ElementRef, InjectionToken } from '@angular/core';

export const PREFIX_THEME = new InjectionToken<string>('PREFIX_THEME');

export interface IHasColor {
  elementRef: ElementRef;
  prefixTheme: string;
}

export class HasColor implements IHasColor {

  elementRef: ElementRef;

  prefixTheme: string;

  constructor(public injector: Injector) {
    this.elementRef = this.injector.get(ElementRef);
    this.prefixTheme = this.injector.get(PREFIX_THEME);
  }
}
