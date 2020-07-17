import { NgModule } from '@angular/core';

import { DigitsOnlyModule } from './directives/digits-only/digits-only.module';
import { FormFieldBaseModule } from './form-field/form-field-base.module';



@NgModule({
  imports: [
    DigitsOnlyModule,
    FormFieldBaseModule,
  ]
})
export class ThemeCoreModule { }
