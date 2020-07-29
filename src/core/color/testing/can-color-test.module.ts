import { Component, NgModule, Injector } from '@angular/core';
import { CommonModule } from '@angular/common';
import { canColorMixin } from '../can-color.mixin';
import { HasColor, PREFIX_THEME } from '../has-color';

export const ngPrefix = 'ng-theme-';

export const otherPrefix = 'other-theme-';

@Component({
  inputs: ['color'],
  selector: 'input',
  template: ``,
})
export class InputTestComponent extends canColorMixin(HasColor) {
  constructor(public injector: Injector) {
    super(injector);
  }
}

@Component({
  template: `<input [color]="color"/>`
})
export class CanColorTestComponent {
  color = 'green';
}

@NgModule({
  declarations: [
    InputTestComponent,
    CanColorTestComponent
  ],
  exports: [
    InputTestComponent,
    CanColorTestComponent
  ],
  imports: [
    CommonModule
  ],
  providers: [
    { provide: PREFIX_THEME, useValue: ngPrefix}
  ]
})
export class CanColorTestModule { }
