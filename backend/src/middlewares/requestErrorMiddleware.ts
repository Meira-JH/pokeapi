import { Request, Response, NextFunction } from 'express';
import { ErrorService } from '../services/ErrorService';

function requestErrorMiddleware(
  error: Error,
  req: Request,
  res: Response,
  next: NextFunction
) {

  ErrorService.setErrorResponse(res, error);
  next();
}

export default requestErrorMiddleware;
