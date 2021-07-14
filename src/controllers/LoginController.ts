import { Request, Response } from "express";
import { LoginBusiness } from "../business/LoginBusiness";
import { UserDatabase } from "../data/UserDataBase";
import { UserLoginRequestDTO } from "../dto/UserDTO";
import { Authenticator } from "../services/Authenticator";

export class LoginController {

  async login(request: Request, response: Response) {

    // NOTE: the application is not secure. It is necessary to implement the refreshToken for security reasons

    const { email, password, role } :  UserLoginRequestDTO = request.body;

    const loggedUser = await new LoginBusiness(
      new UserDatabase
    ).login({email, password, role});

    const authenticationService = new Authenticator();
    const accessToken = authenticationService.generateToken(
      { id: loggedUser?.id ?? '', role: loggedUser?.role ?? '' },
      "1d"
    );


    response.status(200).send({
      accessToken
    });
  }
}
