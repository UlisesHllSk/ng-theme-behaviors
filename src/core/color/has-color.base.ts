import { Injector, ElementRef, InjectionToken } from '@angular/core';

export const PREFIX_COLOR = new InjectionToken<string>('PREFIX_COLOR');

export class HasColorBase {

  elementRef: ElementRef;

  prefixColor: string;

  constructor(public injector: Injector) {
    this.elementRef = this.injector.get(ElementRef);
    this.prefixColor = this.injector.get(PREFIX_COLOR);
  }
}
