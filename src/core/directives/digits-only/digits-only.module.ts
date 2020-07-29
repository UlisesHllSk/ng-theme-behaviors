import { NgModule } from '@angular/core';
import { DigitsOnlyDirective } from './digits-only.directive';

@NgModule({
  declarations: [
    DigitsOnlyDirective,
  ],
  exports: [
    DigitsOnlyDirective,
  ],
})
export class DigitsOnlyModule {}
