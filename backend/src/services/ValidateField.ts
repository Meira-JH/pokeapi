export class ValidateField {

  static isNullNanUndefined<T>(v: T): boolean {
    return v === null || v === undefined || Number.isNaN(v);
  }

  static hasNullNanUndefinedProperty(obj: Record<string, any>): boolean {
    return Object.values(obj).some((props: any) =>
      this.isNullNanUndefined(props)
    );
  }

}
