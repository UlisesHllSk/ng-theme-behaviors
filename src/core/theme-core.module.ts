import { NgModule } from '@angular/core';

import { FieldBaseComponent } from './base/field-component.base';
import { FormControlBaseComponent } from './base/form-control.base';
import { InputBaseComponent } from './base/input-component.base';
import { FormContainerBaseComponent } from './base/container-component.base';


@NgModule({
  imports: [],
  exports: [
    FieldBaseComponent,
    FormControlBaseComponent,
    InputBaseComponent,
    FormContainerBaseComponent,
  ],
  declarations: [
    FieldBaseComponent,
    FormControlBaseComponent,
    InputBaseComponent,
    FormContainerBaseComponent,
  ],
  providers: [],
})
export class ThemeCoreModule { }
