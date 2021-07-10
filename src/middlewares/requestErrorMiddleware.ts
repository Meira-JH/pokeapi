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

process.on('unhandledRejection', async (error: any) => {

  console.error('UnhandledPromiseRejection');
  console.error({ error });
  process.exit();
});
