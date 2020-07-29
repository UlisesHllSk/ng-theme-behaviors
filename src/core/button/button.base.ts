import { IsButton } from './is-button';
import { ElementRef, Injector } from '@angular/core';
import { canColorMixin } from '../color/can-color.mixin';
import { canDisableMixin } from '../disable/can-disable.mixin';
import { PREFIX_THEME } from '../color/has-color';

export class ButtonBase implements IsButton {

  /** Disabled component's flag */
  isDisabled: boolean;

  elementRef: ElementRef<any>;

  prefixTheme: string;

  constructor(
    public injector: Injector
  ) {
    this.elementRef = injector.get(ElementRef);
    this.prefixTheme = injector.get(PREFIX_THEME);
  }

}

export const ButtonMixinBase = canDisableMixin(canColorMixin(ButtonBase));
