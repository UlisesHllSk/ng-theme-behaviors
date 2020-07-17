import { getTestBed, ComponentFixture, TestBed, async } from '@angular/core/testing';
import { DebugElement } from '@angular/core';
import { TextComponent } from '../form-field/testing/form-control-test.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserDynamicTestingModule } from '@angular/platform-browser-dynamic/testing';
import { InputTestComponent, CanDisabledTestModule, CanDisabledTestComponent } from './testing/can-disable-test.module';
import { By } from '@angular/platform-browser';

describe('CanDisabledMixin', () => {
  const testbend = getTestBed();
  let fixtureInput: ComponentFixture<InputTestComponent>;
  let fixtureCanDisabled: ComponentFixture<CanDisabledTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [CanDisabledTestModule]
    }).compileComponents();

    TestBed.overrideModule(BrowserDynamicTestingModule, {
      set: {
        entryComponents: []
      }
    });
    fixtureCanDisabled = TestBed.createComponent(CanDisabledTestComponent);
  }));


  it('should have the disabled element property', () => {
    const input = fixtureCanDisabled.debugElement.query(By.css('input'));
    expect(input.nativeElement.disabled).toBeDefined();
    expect(typeof input.nativeElement.disabled == 'boolean').toBeTruthy();
  });

  it('should detect changes from isDisabled property', () => {
    const input = fixtureCanDisabled.debugElement.query(By.css('input'));
    expect(!input.nativeElement.disabled).toBeTruthy();

    fixtureCanDisabled.debugElement.componentInstance.disabled = true;
    fixtureCanDisabled.detectChanges();
    expect(input.nativeElement.disabled).toBeTruthy();

    fixtureCanDisabled.debugElement.componentInstance.disabled = false;
    fixtureCanDisabled.detectChanges();
    expect(!input.nativeElement.disabled).toBeTruthy();
  });

  afterEach(() => {
    // fixtureInput.autoDetectChanges();
  });
});
