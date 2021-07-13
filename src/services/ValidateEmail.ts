
export class ValidateEmail {

  static isEmailValid(email: string): boolean {

    const regexValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    return regexValidEmail.test(email);
  }
}
