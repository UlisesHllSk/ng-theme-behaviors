import { FormOptions } from '../types/options.type';

export class TrackByValue {
  /**
   * Función que trackea una lista de opciones por medio
   * del valor de cada opción
   * @param index Indice en donde se encuentra el elemento
   * dentro de la colección
   * @param item Valor del objeto que se esta iterando
   */
  trackByValue(index: number, item: FormOptions) {
    if (!item) {
      return null;
    }
    return item.value;
  }
}
