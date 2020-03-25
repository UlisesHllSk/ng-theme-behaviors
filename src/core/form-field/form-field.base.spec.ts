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
import { FormFieldBaseTestModule, FormFieldBaseTestComponent } from './testing/form-control-test.module';
import { FormFieldBaseModule } from './form-field-base.module';
import { DebugElement } from '@angular/core';



fdescribe('AltButton', () => {
  let fixture: ComponentFixture<FormFieldBaseTestComponent>;
  let debugElement: DebugElement;

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
    fixture.detectChanges();
  }));

  it('should implement all the  properties of FormFieldBase', () => {
    expect(fixture.componentInstance.textComponent.changeDetectorRef).toBeDefined();
    expect(fixture.componentInstance.textComponent.value).toBeDefined();
    expect(fixture.componentInstance.textComponent.label).toBeDefined();
    expect(fixture.componentInstance.textComponent.isDisabled).toBeDefined();
  });

  it('should call ControlValueAccesor methods', () => {
    const writeValueSpy = spyOn(fixture.componentInstance.textComponent, 'writeValue').and.callThrough();
    fixture.detectChanges();

    expect(writeValueSpy).toHaveBeenCalled();
  });

});
