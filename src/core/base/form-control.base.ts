import { Input, Output, EventEmitter, OnInit, OnDestroy, ChangeDetectorRef, Optional, Inject, Component } from '@angular/core';
import { FormControl, ValidatorFn, AsyncValidatorFn, ControlValueAccessor, Validator, ValidationErrors } from '@angular/forms';

import { FieldBaseComponent, FIELD_METADATA } from './field-component.base';

/**
 * Clase Base para implementar todos los inputs de los formularios
 */
@Component({ template: ''})
export class FormControlBaseComponent extends FieldBaseComponent implements OnDestroy, OnInit, ControlValueAccessor, Validator {
  /** Parametro que indica el label del input */
  @Input() label: string;

  /** Nombre asignado al input */
  @Input() name: string;

  /** Hint que se muestra debajo del campo del lado izquierdo */
  @Input() hintStart: string;

  /** Hint que se muestra debajo del componente del lado derecho */
  @Input() hintEnd: string;

  /** Indica si el campo es requerido */
  @Input() required = false;

  /** Valor default del campo */
  @Input() defaultValue: string;

  /** Evento que indica si cambio o no el campo. */
  @Output() change = new EventEmitter<any>();

  /** Arreglo del validaciones adicionales para el componente */
  protected validators: ValidatorFn[] = [];

  /** Arreglo del validaciones necesarias para el componente */
  protected componentValidators: ValidatorFn[] = [];

  /** Arreglo del validaciones asincronas necesarias para el componente */
  protected asyncValidators: AsyncValidatorFn[] = [];

  /** Indicador para checar si el campo está contenido en un FormArray */
  isFormArray = false;

  /** Indicador para checar si el campo está contenido en un FormArray */
  formArrayName: string;

  /** Valor actual del campo */
  value = null;

  /** Indicador que determina si el campo esta deshabilitado */
  isDisabled: boolean;

  onChange = (_: any) => { };

  onTouch = () => { };

  ngOnInit() {
    super.ngOnInit();
    if (this.control) { this.setControl(); }
  }

  writeValue(value: any): void {
    this.value = value || '';
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouch = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.isDisabled = isDisabled;
  }

  validate(control: FormControl): ValidationErrors {
    if (!this.control) {
      this.control = control;
      this.setControl();
    }
    return null;
  }

  onInput(value: string) {
    this.value = value;
    this.onTouch();
    this.onChange(this.value);
    this.onValueChanges(this.value);
  }

  /**
   * Vincula el componente con el FormControl recibido en la metadata
   */
  public setControl() {
    const validators = [
      ...this.validators,
      ...this.componentValidators,
      this.validateRequired,
    ];
    this.control.setValidators(validators);
    this.control.setAsyncValidators(this.asyncValidators);
    this.control.updateValueAndValidity();
  }

  /**
   * Metodo que cacha el cambio del campo
   * @param value valor del campo
   */
  protected onValueChanges = (value: any) => {
    this.change.emit(value);
  }

  private validateRequired = (control: FormControl) => {
    if (
      this.visible.getValue() &&
      this.required &&
      (control.value === null ||
        control.value === '')) {
      return { required: true };
    }
    return null;
  }

}
