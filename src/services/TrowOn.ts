import { FAILURE_MESSAGE } from '../models/errorMessage';
import { ValidateEmail } from './ValidateEmail';

export class ThrowOn {

  static invalidEmail(email: string): void {
    const isValidEmail = ValidateEmail.isEmailValid(email);

    if (!isValidEmail) {
      throw { message: FAILURE_MESSAGE.INVALID_EMAIL, status: 422 };
    }
  }
}
