import { Request, Response } from "express";
import { LoginBusiness } from "../business/LoginBusiness";
import { UserDatabase } from "../data/UserDataBase";
import { UserLoginRequestDTO } from "../dto/UserDTO";

export class LoginController {

  async login(request: Request, response: Response) {

    const { email, password, role } :  UserLoginRequestDTO = request.body;

    const user = await new LoginBusiness(
      new UserDatabase
    ).login({email, password, role});

    response.status(200).send({
      email
    });
  }
}
