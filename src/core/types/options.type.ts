/**
 * Definción de tipo para opciones de
 * un campo, se ocupa especialmente
 * para campos _select_ y _radio_
 */
export interface FormOptions {
  label: string;
  value: any;
  [key: string]: any;
}
