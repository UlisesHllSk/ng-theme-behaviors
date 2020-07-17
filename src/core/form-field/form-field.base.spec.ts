import {
  ComponentFixture,
  fakeAsync,
  flushMicrotasks,
  inject,
  TestBed,
  tick,
  flush,
  async,
} from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { FormFieldBaseTestModule, FormFieldBaseTestComponent, TextComponent } from './testing/form-control-test.module';
import { FormFieldBaseModule } from './form-field-base.module';
import { DebugElement } from '@angular/core';



describe('FormField', () => {
  let fixture: ComponentFixture<FormFieldBaseTestComponent>;
  let debugElement: DebugElement;
  let textDebugElement: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        FormFieldBaseModule,
        FormFieldBaseTestModule,
      ]
    });
    TestBed.compileComponents();
    fixture = TestBed.createComponent(FormFieldBaseTestComponent);
    debugElement = fixture.debugElement;
    textDebugElement = fixture.debugElement.query(By.directive(TextComponent));
    fixture.detectChanges();
  }));

  it('should implement all the  properties of FormFieldBase', () => {
    expect(textDebugElement.componentInstance.changeDetectorRef).toBeDefined();
    expect(textDebugElement.componentInstance.value).toBeDefined();
    expect(textDebugElement.componentInstance.label).toBeDefined();
    expect(textDebugElement.componentInstance.isDisabled).toBeDefined();
  });

  it('should detect value changes', () => {
    const writeValueSpy = spyOn(textDebugElement.componentInstance, 'writeValue').and.callThrough();
    const onInputSpy = spyOn(textDebugElement.componentInstance, 'onInput').and.callThrough();
    const changedValue = 'Value has changed';
    const input = debugElement.query(By.css('input'));

    fixture.componentInstance.form.get('text').setValue(changedValue);
    fixture.detectChanges();
    expect(writeValueSpy).toHaveBeenCalled();
    expect(textDebugElement.componentInstance.value).toEqual(changedValue);

    input.nativeElement.value = changedValue + ' again';
    input.nativeElement.dispatchEvent(new Event('input'));
    fixture.detectChanges();
    expect(onInputSpy).toHaveBeenCalled();
    expect(textDebugElement.componentInstance.value).toEqual(changedValue + ' again');
    expect(fixture.componentInstance.form.get('text').value).toEqual(changedValue + ' again');
  });

  it('should emit formcontrol valueChanges event', () => {
    const formValueChangeSpy  = jasmine.createSpy('formValueChange spy');
    const changedValue = 'Value has changed';
    const input = debugElement.query(By.css('input'));
    fixture.componentInstance.form.get('text').valueChanges.subscribe(formValueChangeSpy);
    input.nativeElement.value = changedValue;
    input.nativeElement.dispatchEvent(new Event('input'));
    fixture.detectChanges();

    expect(formValueChangeSpy).toHaveBeenCalled();
    expect(formValueChangeSpy.calls.first().args[0]).toEqual(changedValue);
  });

});
