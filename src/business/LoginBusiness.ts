import { HashManager } from '../services/HashManager';
import { UserDataBaseDTO, UserDTO, UserLoginRequestDTO } from '../dto/UserDTO';
import { ThrowOn } from '../services/TrowOn';
import { UserDatabase } from '../data/UserDataBase';
import { ERROR_MESSAGE } from '../models/errorMessage';

export class LoginBusiness {
  constructor(
    private userDataBase: UserDatabase
  ) {}

  public async login(user: UserLoginRequestDTO): Promise<string> {
    ThrowOn.invalidEmail(user.email);

    const userFromDataBase = await this.userDataBase.getUserByEmail(user.email);

    ThrowOn.validateProperty(userFromDataBase, {
      message: ERROR_MESSAGE.INVALID_PARAMETERS,
      status: 422,
    });

    ThrowOn.invalidPassword(user.password, userFromDataBase.password);

    const accessToken = ''

    return ''
  }
}
