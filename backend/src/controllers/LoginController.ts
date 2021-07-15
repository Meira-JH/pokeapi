import { Request, Response } from 'express';
import { LoginBusiness } from '../business/LoginBusiness';
import { UserDatabase } from '../data/UserDataBase';
import { UserLoginRequestDTO } from '../dto/UserDTO';
import { ERROR_MESSAGE } from '../models/errorMessage';
import { Authenticator } from '../services/Authenticator';
import { ThrowOn } from '../services/ThrowOn';

export class LoginController {
  async login(request: Request, response: Response): Promise<void> {

    // NOTE: It is necessary to implement the refreshToken to improve security and experience

    const {
      email,
      password,
      role = 'user',
      device,
    }: UserLoginRequestDTO = request.body;

    ThrowOn.validateProperty(
      { email, password, role, device },
      {
        message: ERROR_MESSAGE.INVALID_PARAMETERS,
        status: 422,
      }
    );

    const accessToken = await new LoginBusiness(
      new UserDatabase(),
      new Authenticator()
    ).login({ email, password, role });

    ThrowOn.validateField(accessToken, {
      message: ERROR_MESSAGE.NOT_FOUND,
      status: 404,
    });

    response.status(200).send({
      accessToken,
    });
  }
}
