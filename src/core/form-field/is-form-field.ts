import { ChangeDetectorRef } from '@angular/core';
import { CanDisableInterface } from '../disable/can-disable';

export interface IsFormFieldInterface extends CanDisableInterface {
  changeDetectorRef: ChangeDetectorRef;
  label: string;
  value: any;
}
