import {
  Input,
  HostBinding,
  OnDestroy,
  ChangeDetectorRef,
  InjectionToken,
  Inject,
  Optional,
  OnInit,
  Component
} from '@angular/core';
import { FormControl } from '@angular/forms';
import { BehaviorSubject, Subscription } from 'rxjs';

export const FIELD_METADATA = new InjectionToken<{ element: any }>(
  'FIELD_METADATA'
);

@Component({ template: ''})
export class FieldBaseComponent implements OnInit, OnDestroy {
  /** Evento para hacer visible o esconder el componente */
  @Input() visible = new BehaviorSubject<boolean>(true);

  /** Número de columnas que ocupará el componente */
  @Input() grid = 'col-md-12';

  /** El FormControl vinculado al componente */
  control: FormControl;

  /** Almacena todas las suscripciones del componente */
  subscriptions: Subscription[] = [];

  @HostBinding('class')
  get hostClasses(): string {
    const grid = this.visible.getValue() ? this.grid : '';
    return [grid].join(' ');
  }

  constructor(
    protected changeDetectorRef: ChangeDetectorRef,
    @Optional() @Inject(FIELD_METADATA) protected metadata: any
  ) {}

  ngOnInit() {
    if (this.metadata) {
      this.fromJson(this.metadata);
    }
  }

  ngOnDestroy(): void {
    for (const subscription of this.subscriptions) {
      subscription.unsubscribe();
    }
  }

  /**
   * Asigna los valores de un json al componenete
   * @param  metadata object con la informacion inicial
   */
  public fromJson(metadata: any): FieldBaseComponent {
    // tslint:disable-next-line: forin
    for (const propName in metadata) {
      (this as any)[propName] = metadata[propName];
    }

    return this;
  }
}
