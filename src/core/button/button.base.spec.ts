import { async, TestBed, ComponentFixture } from '@angular/core/testing';
import { IsButtonModule, IsButtonComponent, ButtonTestComponent } from './testing/button-test.module';
import { By } from '@angular/platform-browser';
import { PREFIX_THEME } from '../color/has-color';

describe('ButtonBase', () => {
  let fixture: ComponentFixture<IsButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [IsButtonModule],
      providers: [
        { provide: PREFIX_THEME, useValue: 'ng-theme-'}
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(IsButtonComponent);
  }));

  it('should have button\'s properties', () => {
    const buttonDebugElement = fixture.debugElement.query(By.directive(ButtonTestComponent));
    fixture.detectChanges();

    expect(buttonDebugElement.componentInstance.color).toBeDefined();
    expect(buttonDebugElement.componentInstance.prefixTheme).toBeDefined();
    expect(buttonDebugElement.componentInstance.injector).toBeDefined();
    expect(buttonDebugElement.componentInstance.elementRef).toBeDefined();
    expect(buttonDebugElement.componentInstance.isDisabled).toBeDefined();
  });

  it('should have the button host\'s properties', () => {
    const buttonDebugElement = fixture.debugElement.query(By.directive(ButtonTestComponent));
    fixture.detectChanges();

    expect(buttonDebugElement.nativeElement.classList).toContain('ng-theme-blue');
    expect(buttonDebugElement.nativeElement.disabled).toBeFalsy();
  });

  it('should detect changes from the color property', () => {
    const buttonDebugElement = fixture.debugElement.query(By.directive(ButtonTestComponent));
    fixture.detectChanges();
    expect(buttonDebugElement.componentInstance.color).toEqual(fixture.componentInstance.color);
    expect(buttonDebugElement.nativeElement.classList).toContain('ng-theme-' + fixture.componentInstance.color);


    fixture.componentInstance.color = 'blue';
    fixture.detectChanges();
    expect(buttonDebugElement.componentInstance.color).toEqual(fixture.componentInstance.color);
    expect(buttonDebugElement.nativeElement.classList).toContain('ng-theme-' + fixture.componentInstance.color);

    fixture.componentInstance.color = 'yellow';
    fixture.detectChanges();
    expect(buttonDebugElement.componentInstance.color).toEqual(fixture.componentInstance.color);
    expect(buttonDebugElement.nativeElement.classList).toContain('ng-theme-' + fixture.componentInstance.color);

    fixture.componentInstance.color = 'red';
    fixture.detectChanges();
    expect(buttonDebugElement.componentInstance.color).toEqual(fixture.componentInstance.color);
    expect(buttonDebugElement.nativeElement.classList).toContain('ng-theme-' + fixture.componentInstance.color);
  });

  it('should detect changes from isDisabled property', () => {
    const buttonDebugElement = fixture.debugElement.query(By.directive(ButtonTestComponent));
    expect(buttonDebugElement.componentInstance.isDisabled).toBeFalsy();
    expect(buttonDebugElement.nativeElement.disabled).toBeFalsy();

    fixture.debugElement.componentInstance.disabled = true;
    fixture.detectChanges();
    expect(buttonDebugElement.componentInstance.isDisabled).toBeTruthy();
    expect(buttonDebugElement.nativeElement.disabled).toBeTruthy();

    fixture.debugElement.componentInstance.disabled = false;
    fixture.detectChanges();
    expect(buttonDebugElement.componentInstance.isDisabled).toBeFalsy();
    expect(buttonDebugElement.nativeElement.disabled).toBeFalsy();
  });
});
