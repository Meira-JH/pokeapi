import { Request, Response } from "express";
import { LoginBusiness } from "../business/LoginBusiness";
import { UserDatabase } from "../data/UserDataBase";
import { UserLoginRequestDTO } from "../dto/UserDTO";
import { Authenticator } from "../services/Authenticator";
import { HashManager } from "../services/HashManager";

export class LoginController {

  async login(request: Request, response: Response) {

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
