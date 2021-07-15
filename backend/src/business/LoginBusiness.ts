import { UserDataBaseDTO, UserLoginRequestDTO } from '../dto/UserDTO';
import { ThrowOn } from '../services/ThrowOn';
import { UserDatabase } from '../data/UserDataBase';
import { ERROR_MESSAGE } from '../models/errorMessage';
import { Authenticator } from '../services/Authenticator';

export class LoginBusiness {
  constructor(
    private userDataBase: UserDatabase,
    private authenticator: Authenticator
  ) {}

  async login(user: UserLoginRequestDTO): Promise<string | null> {

    ThrowOn.validateEmail(user.email);

    const userFromDataBase = await this.userDataBase.getUserByEmail(user.email);

    ThrowOn.validateField(userFromDataBase,{
      message: ERROR_MESSAGE.INVALID_EMAIL_OR_PASSWORD,
      status: 404
    });

    await ThrowOn.validatePassword(user.password, userFromDataBase!.password);

    const accessToken = this.authenticator.generateToken(
      { id: userFromDataBase!.id , role: userFromDataBase!.role },
      process.env.ACCESS_TOKEN_EXPIRES_IN
    );

   return accessToken
  }
}
