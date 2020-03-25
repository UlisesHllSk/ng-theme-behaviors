import { ChangeDetectorRef } from '@angular/core';

export interface IsFormField {
  changeDetectorRef: ChangeDetectorRef;
  isDisabled: boolean;
  label: string;
  value: any;
}
