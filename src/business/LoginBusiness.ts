import { HashManager } from '../services/HashManager';
import { UserDataBaseDTO, UserDTO, UserLoginRequestDTO } from '../dto/UserDTO';
import { ThrowOn } from '../services/TrowOn';
import { UserDatabase } from '../data/UserDataBase';
import { ERROR_MESSAGE } from '../models/errorMessage';

export class LoginBusiness {
  constructor(
    private userDataBase: UserDatabase
  ) {}

  public async login(user: UserLoginRequestDTO): Promise<UserDataBaseDTO | null> {

    ThrowOn.validateEmail(user.email);

    const userFromDataBase = await this.userDataBase.getUserByEmail(user.email);

    await ThrowOn.validatePassword(user.password, userFromDataBase?.password ?? '');

    ThrowOn.validateField(userFromDataBase, {
      message: ERROR_MESSAGE.INVALID_EMAIL_OR_PASSWORD,
      status: 403,
    });

    ThrowOn.validateProperty(userFromDataBase, {
      message: ERROR_MESSAGE.INVALID_PARAMETERS,
      status: 422,
    });


   return userFromDataBase
  }
}
