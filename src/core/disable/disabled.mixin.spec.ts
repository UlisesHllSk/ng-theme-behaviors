import { getTestBed, ComponentFixture, TestBed, async } from '@angular/core/testing';
import { DebugElement } from '@angular/core';
import { TextComponent } from '../form-field/testing/form-control-test.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserDynamicTestingModule } from '@angular/platform-browser-dynamic/testing';
import { InputTestComponent, CanDisabledTestModule } from './testing/can-disabled-test.module';

describe('CanDisabledMixin', () => {
  const testbend = getTestBed();
  let fixture: ComponentFixture<InputTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [CanDisabledTestModule]
    }).compileComponents();

    TestBed.overrideModule(BrowserDynamicTestingModule, {
      set: {
        entryComponents: []
      }
    });
    fixture = TestBed.createComponent(InputTestComponent);
    fixture.autoDetectChanges();
  }));

  it('should have the isDisabled property', async(() => {
    expect(fixture.componentInstance.isDisabled).toBeDefined();
    expect(typeof fixture.componentInstance.isDisabled == 'boolean').toBeTruthy();
  }));

  it('should have the disabled element property', () => {
    expect(fixture.debugElement.nativeElement.disabled).toBeDefined();
    expect(typeof fixture.debugElement.nativeElement.disabled == 'boolean').toBeTruthy();
  });

  afterEach(() => {
    fixture.autoDetectChanges();
  });
});
