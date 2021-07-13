import { Request, Response } from "express";
import { UserLoginRequestDTO } from "../dto/UserDTO";

export class LoginController {

  async login(request: Request, response: Response) {

    const { email, password, role } :  UserLoginRequestDTO = request.body;

    response.status(200).send({
      email
    });
  }
}
