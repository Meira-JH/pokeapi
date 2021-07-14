import * as jwt from "jsonwebtoken";
import { ERROR_MESSAGE } from "../models/errorMessage";

export class Authenticator {
  public generateToken(
    input: AuthenticationData,
    expiresIn: string = process.env.REFRESH_TOKEN_EXPIRES_IN!
  ): string {
    const user = jwt.sign(
      {
        id: input.id,
        device: input.device,
        role: input.role,
      },
      process.env.JWT_KEY as string,
      {
        expiresIn,
      }
    );

    if(!user){
      throw {
        message: ERROR_MESSAGE.NOT_AUTHORIZED,
        status: 403
      }
    }
    return user;
  }

  public getData(token: string): AuthenticationData {
    const payload = jwt.verify(token, process.env.JWT_KEY as string) as any;
    const result = {
      id: payload.id,
      device: payload.device,
      role: payload.role,
    };
    return result;
  }
}

interface AuthenticationData {
  id: string;
  device?: string;
  role?: string;
}
