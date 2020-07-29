import { Component, NgModule, ViewChild, AfterViewInit } from '@angular/core';
import { canDisableMixin } from '../can-disable.mixin';
import { CanDisable } from '../can-disable';

@Component({
  host: {
    '[disabled]': 'isDisabled',
  },
  inputs: ['isDisabled'],
  selector: 'input',
  template: ``,
})
export class InputTestComponent extends canDisableMixin(CanDisable) { }

@Component({
  template: `<input [isDisabled]="disabled" />`
})
export class CanDisabledTestComponent implements AfterViewInit {

  @ViewChild(InputTestComponent)
  input: InputTestComponent;

  disabled = false;

  ngAfterViewInit() {

  }
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
