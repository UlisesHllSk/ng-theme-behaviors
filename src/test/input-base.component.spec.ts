import {
  TestBed,
  async,
  getTestBed,
  ComponentFixture
} from '@angular/core/testing';
import { DebugElement, Component, OnInit } from '@angular/core';
import { BrowserDynamicTestingModule } from '@angular/platform-browser-dynamic/testing';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';

import { InputBaseComponent } from '../core';
import { fieldsProviders } from '../core/utils/field-providers';

@Component({
  selector: 'text',
  providers: [
    ...fieldsProviders(TextComponent)
  ],
  template: `
    <input [disabled]="isDisabled" type="text">
  `
})
class TextComponent extends InputBaseComponent {
}

@Component({
  template: `
    <text [formControl]="control"></text>
    {{ control.status }}
    <button (click)="disable()">Disable</button>
  `
})
class TextImplComponent implements OnInit {
  control = new FormControl();
  ngOnInit() {
    this.control.statusChanges.subscribe(status => console.log('Status changed', status));
  }

  disable() {
    this.control.disabled ? this.control.enable() : this.control.disable();
  }
}

describe('TextImplComponent', () => {
  const testbend = getTestBed();
  let fixture: ComponentFixture<TextImplComponent>;
  let component: TextImplComponent;
  let el: DebugElement;
  // const control = new FormControl({disabled: true});

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TextComponent, TextImplComponent],
      imports: [FormsModule, ReactiveFormsModule]
    }).compileComponents();

    TestBed.overrideModule(BrowserDynamicTestingModule, {
      set: {
        entryComponents: []
      }
    });
    fixture = TestBed.createComponent(TextImplComponent);
    component = fixture.componentInstance;
    // component.control = control;
    el = fixture.debugElement;
    fixture.autoDetectChanges();
  }));

  it('Define Component', async(() => {
    console.log(component);
    expect(component).toBeDefined();
  }));

  afterEach(() => {
    fixture.autoDetectChanges();
  });
});
