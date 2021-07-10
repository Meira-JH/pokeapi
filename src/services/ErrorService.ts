import { Response } from 'express';
import { FAILURE_MESSAGE } from '../models/errorMessage';

export class ErrorService {

  static setErrorResponse(res: Response, error: any): Response {

    const message = error.message ?? FAILURE_MESSAGE.GENERIC_ERROR;
    const status = error.status ?? 500;

    return res.status(status).send(message);
  }
}
