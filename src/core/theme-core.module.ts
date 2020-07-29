import { NgModule } from '@angular/core';

import { DigitsOnlyModule } from './directives/digits-only/digits-only.module';



@NgModule({
  imports: [
    DigitsOnlyModule,
  ]
})
export class ThemeCoreModule { }
