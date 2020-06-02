import { Component, NgModule } from '@angular/core';
import { canDisableMixin } from '../can-disabled.mixin';
import { CanDisable } from '../can-disabled';

@Component({
  host: {
    '[attr.disabled]': 'isDisabled || null',
  },
  inputs: ['isDisabled'],
  selector: 'input',
  template: ``,
})
export class InputTestComponent extends canDisableMixin(CanDisable) { }

@Component({
  template: `<input [isDisabled]="isDisabled" />`
})
export class CanDisabledTestComponent {
  isDisabled = false;
}

@NgModule({
  declarations: [
    InputTestComponent,
    CanDisabledTestComponent
  ],
  exports: [
    InputTestComponent,
    CanDisabledTestComponent
  ]
})
export class CanDisabledTestModule { }
