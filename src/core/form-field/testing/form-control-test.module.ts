import { Component, ViewChild } from '@angular/core';
import { NgModule } from '@angular/core';

import { FormFieldMixinBase } from '../form-field.base';
import { FormFieldBaseModule } from '../form-field-base.module';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  host: {
    '(input)': 'onInput($event.target.value)'
  },
  selector: 'input[type="text"]',
  template: ``
})

export class TextComponent extends FormFieldMixinBase {

}

@Component({
  template: `<input type="text" [label]="label" [formControl]="form.get('text')"/>`
})
export class FormFieldBaseTestComponent {

  @ViewChild(TextComponent)
  textComponent: TextComponent;

  label = 'label';

  form = new FormGroup({
    text: new FormControl('')
  });
}


@NgModule({
  imports: [FormFieldBaseModule],
  exports: [TextComponent, FormFieldBaseTestComponent],
  declarations: [TextComponent, FormFieldBaseTestComponent],
  providers: [],
})
export class FormFieldBaseTestModule { }

