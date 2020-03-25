import { Component, ViewChild } from '@angular/core';
import { NgModule } from '@angular/core';

import { FormFieldMixinBase } from '../form-field.base';
import { FormFieldBaseModule } from '../form-field-base.module';

@Component({
  selector: 'input[type="text"]',
  template: ``
})

export class TextComponent extends FormFieldMixinBase {

}

@Component({
  template: `<input type="text" [label]="label" [isDisabled]="isDisabled"/>`
})
export class FormFieldBaseTestComponent {
  @ViewChild(TextComponent)
  textComponent: TextComponent;
  label = 'label';
  isDisabled = false;
}


@NgModule({
  imports: [FormFieldBaseModule],
  exports: [TextComponent, FormFieldBaseTestComponent],
  declarations: [TextComponent, FormFieldBaseTestComponent],
  providers: [],
})
export class FormFieldBaseTestModule { }

