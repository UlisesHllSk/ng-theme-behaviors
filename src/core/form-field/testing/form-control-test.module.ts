import { Component, ViewChild } from '@angular/core';
import { NgModule } from '@angular/core';

import { FormFieldMixinBase } from '../form-field.base';
import { FormFieldBaseModule } from '../form-field-base.module';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { fieldsProviders } from '../../utils/field-providers';

@Component({
  host: {
    '[disabled]': 'isDisabled',
    '(input)': 'onInput($event.target.value)'
  },
  providers: [
    ...fieldsProviders(TextComponent)
  ],
  inputs: ['label'],
  selector: 'input[type="text"]',
  template: ``
})

export class TextComponent extends FormFieldMixinBase { }

@Component({
  template: `<input type="text" [label]="label" [formControl]="form.get('text')"/>`
})
export class FormFieldBaseTestComponent {

  label = 'label';

  form = new FormGroup({
    text: new FormControl('')
  });
}


@NgModule({
  imports: [
    FormFieldBaseModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [TextComponent, FormFieldBaseTestComponent],
  declarations: [TextComponent, FormFieldBaseTestComponent],
  providers: [],
})
export class FormFieldBaseTestModule { }

