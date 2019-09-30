import {
  Input,
  ViewChild,
  ViewContainerRef,
  ComponentFactoryResolver,
  InjectionToken,
  Optional,
  Inject,
  Injector,
  ContentChildren,
  QueryList,
  Component
} from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { FIELD_METADATA, FieldBaseComponent } from './field-component.base';

export const CONTAINER_METADATA = new InjectionToken<{ element: any }>(
  'CONTAINER_METADATA'
);

@Component({template: ''})
export class FormContainerBaseComponent {
  @Input()
  subtitle = '';

  @Input()
  title = '';

  @Input()
  visible = new BehaviorSubject<boolean>(true);

  @ContentChildren(FieldBaseComponent)
  childrenFields: QueryList<FieldBaseComponent>;

  @ViewChild('fieldsDynamicContainer', { read: ViewContainerRef, static: true })
  fieldsDynamicContainer: ViewContainerRef;

  currentComponent: any;

  get classes() {
    return [
      'row',
    ].join(' ');
  }

  constructor(
    protected resolver: ComponentFactoryResolver,
    protected formComponents: any,
    @Optional() @Inject(CONTAINER_METADATA) protected metadata: any
  ) {
    if (this.metadata) {
      this.fromJson(this.metadata);
    }
  }

  createComponent(component: any, metadata: any) {
    metadata['visible'] = this.visible;
    const injector = Injector.create({
      providers: [{ provide: FIELD_METADATA, useValue: metadata }]
    });
    const factory = this.resolver.resolveComponentFactory<any>(component);
    const componentRef = factory.create(injector);
    // Insert the component into the dom container
    this.fieldsDynamicContainer.insert(componentRef.hostView);
    this.currentComponent = componentRef;
  }

  createComponents() {
    for (const field of this.metadata.formMetadata) {
      this.createComponent(this.formComponents[field.type], field);
    }
  }

  /**
   * Asigna los valores de un json al componenete
   * @param  json json con la informacion inicial
   */
  fromJson(json: any) {
    // tslint:disable-next-line: forin
    for (const propName in json) {
      (this as any)[propName] = json[propName];
    }

    return this;
  }
}
