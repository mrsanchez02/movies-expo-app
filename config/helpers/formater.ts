export class Formater {
  public static currency(value: number): string {
      return new Intl.NumberFormat('es-ES', { style: 'currency', currency: 'USD' }).format(value);
  }
}