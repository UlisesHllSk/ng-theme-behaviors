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



describe('AltButton', () => {
  let fixture: ComponentFixture<FormFieldBaseTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        FormFieldBaseModule,
        FormFieldBaseTestModule,
      ]
    });
    TestBed.compileComponents();
    fixture = TestBed.createComponent(FormFieldBaseTestComponent);
  }));

  it('should implement all of FormFieldBase properties', () => {

    fixture.detectChanges();

    expect(fixture.componentInstance.textComponent.changeDetectorRef).toBeDefined();
    expect(fixture.componentInstance.textComponent.value).toBeDefined();
    expect(fixture.componentInstance.textComponent.label).toBeDefined();
    expect(fixture.componentInstance.textComponent.isDisabled).toBeDefined();
  });

});
