import { ChangeDetectorRef } from '@angular/core';
import { ICanDisable } from '../disable/can-disable';

export interface IsFormFieldInterface extends ICanDisable {
  changeDetectorRef: ChangeDetectorRef;
  label: string;
  value: any;
}
