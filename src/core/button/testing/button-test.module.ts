import { Component, Injector, NgModule } from '@angular/core';
import { ButtonMixinBase } from '../button.base';

@Component({
  host:{
    '[disabled]': 'isDisabled'
  },
  inputs: ['color', 'isDisabled'],
  selector: 'button',
  template: `
    <<ng-content></ng-content>
  `
})
export class ButtonTestComponent extends ButtonMixinBase {
  constructor(
    public injector: Injector
  ) {
    super(injector);
  }
}

@Component({
  template: `
    <button [color]="color" [isDisabled]="disabled">Submit</button>
  `
})
export class IsButtonComponent {

  color = 'blue';

  disabled = false;

}

@NgModule({
  declarations: [
    ButtonTestComponent,
    IsButtonComponent,
  ],
  exports: [
    ButtonTestComponent,
    IsButtonComponent,
  ],
})
export class IsButtonModule{ }

