import { TError } from '../models/error';
import { ERROR_MESSAGE } from '../models/errorMessage';
import { HashManager } from './HashManager';
import { ValidateField } from './ValidateField';
import { ValidateEmail } from './ValidateEmail';

export class ThrowOn {
  static invalidEmail(email: string): void {
    const isValidEmail = ValidateEmail.isEmailValid(email);

    if (!isValidEmail) {
      throw { message: ERROR_MESSAGE.INVALID_EMAIL, status: 422 };
    }
  }

  static async invalidPassword(
    password: string,
    hashedPassword: string
  ): Promise<void> {
    const isValidPassword = await HashManager.compareHashToPass(
      password,
      hashedPassword
    );

    if (!isValidPassword) {
      throw {
        message: ERROR_MESSAGE.NOT_AUTHORIZED,
        status: 403,
      };
    }
  }

  static validateProperty<T>(input: T, error: TError): void {
    if (ValidateField.hasNullNanUndefinedProperty(input)) throw error;
  }
}
