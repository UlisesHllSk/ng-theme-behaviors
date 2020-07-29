/**
 * Realiza una mezcla de clases sobre una clase dada, dando como
 * resultado una _herencia multiple_
 * @param derivedCtor Clase sobre la que se realizará la herencia multiple
 * @param baseCtors Colección de clases base de las que se hereadará
 */
export function applyMixins(derivedCtor: any, baseCtors: any[]) {
  baseCtors.forEach(baseCtor => {
    Object.getOwnPropertyNames(baseCtor.prototype).forEach(name => {
      Object.defineProperty(
        derivedCtor.prototype,
        name,
        Object.getOwnPropertyDescriptor(baseCtor.prototype, name)
      );
    });
  });
}
