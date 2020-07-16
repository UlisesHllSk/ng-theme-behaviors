import { getTestBed, ComponentFixture, TestBed, async } from '@angular/core/testing';
import { BrowserDynamicTestingModule } from '@angular/platform-browser-dynamic/testing';
import { By } from '@angular/platform-browser';
import { CanColorTestComponent, CanColorTestModule, InputTestComponent } from './testing/can-color-test.module';
import { PREFIX_THEME } from './has-color';

describe('CanColorMixin', () => {
  const ngPrefix = 'ng-theme-';
  let fixture: ComponentFixture<CanColorTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [CanColorTestModule],
      providers: [
        { provide: PREFIX_THEME, useValue: ngPrefix}
      ]
    }).compileComponents();

    TestBed.overrideModule(BrowserDynamicTestingModule, {
      set: {
        entryComponents: []
      }
    });
    fixture = TestBed.createComponent(CanColorTestComponent);
  }));


  it('should have the color property', () => {
    const inputDebugElement = fixture.debugElement.query(By.directive(InputTestComponent));
    fixture.detectChanges();

    expect((inputDebugElement.componentInstance as InputTestComponent).color).toBeDefined();
    expect((inputDebugElement.componentInstance as InputTestComponent).prefixTheme).toBeDefined();
    expect((inputDebugElement.componentInstance as InputTestComponent).injector).toBeDefined();
    expect((inputDebugElement.componentInstance as InputTestComponent).elementRef).toBeDefined();
  });

  it('should have the theme\'s class', () => {
    const inputDebugElement = fixture.debugElement.query(By.directive(InputTestComponent));
    const prefixTheme = TestBed.inject(PREFIX_THEME);
    const color = fixture.componentInstance.color;
    fixture.detectChanges();

    expect(inputDebugElement.nativeElement.classList).toContain(prefixTheme + color);
  });

  it('should detect changes from the color property', () => {
    const inputDebugElement = fixture.debugElement.query(By.directive(InputTestComponent));
    const prefixTheme = TestBed.inject(PREFIX_THEME);
    fixture.detectChanges();
    expect((inputDebugElement.componentInstance as InputTestComponent).color).toEqual(fixture.componentInstance.color);
    expect(inputDebugElement.nativeElement.classList).toContain(prefixTheme + fixture.componentInstance.color);


    fixture.componentInstance.color = 'blue';
    fixture.detectChanges();
    expect((inputDebugElement.componentInstance as InputTestComponent).color).toEqual(fixture.componentInstance.color);
    expect(inputDebugElement.nativeElement.classList).toContain(prefixTheme + fixture.componentInstance.color);

    fixture.componentInstance.color = 'yellow';
    fixture.detectChanges();
    expect((inputDebugElement.componentInstance as InputTestComponent).color).toEqual(fixture.componentInstance.color);
    expect(inputDebugElement.nativeElement.classList).toContain(prefixTheme + fixture.componentInstance.color);

    fixture.componentInstance.color = 'red';
    fixture.detectChanges();
    expect((inputDebugElement.componentInstance as InputTestComponent).color).toEqual(fixture.componentInstance.color);
    expect(inputDebugElement.nativeElement.classList).toContain(prefixTheme + fixture.componentInstance.color);
  });
});

describe('PREFIX_THEME token', () => {
  const ngPrefix = 'ng-theme-';
  const otherPrefix = 'other-theme-';
  let fixture: ComponentFixture<CanColorTestComponent>;

  it('should set the value of \'ng-theme-\' to the PREFIX_THEME token', () => {
    TestBed.configureTestingModule({
      imports: [CanColorTestModule],
      providers: [
        { provide: PREFIX_THEME, useValue: ngPrefix}
      ]
    }).compileComponents();
    fixture = TestBed.createComponent(CanColorTestComponent);
    const inputDebugElement = fixture.debugElement.query(By.directive(InputTestComponent));
    const color = fixture.componentInstance.color;
    fixture.detectChanges();
    expect(inputDebugElement.nativeElement.classList).toContain(ngPrefix + color);
  });

  it('should set the value of \'other-theme-\' to the PREFIX_THEME token', () => {
    TestBed.configureTestingModule({
      imports: [CanColorTestModule],
      providers: [
        { provide: PREFIX_THEME, useValue: otherPrefix}
      ]
    }).compileComponents();
    fixture = TestBed.createComponent(CanColorTestComponent);
    const inputDebugElement = fixture.debugElement.query(By.directive(InputTestComponent));
    const color = fixture.componentInstance.color;
    fixture.detectChanges();
    expect(inputDebugElement.nativeElement.classList).toContain(otherPrefix + color);
  });
});
