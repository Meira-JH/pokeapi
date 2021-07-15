import { NextFunction, RequestHandler, Request, Response } from 'express';
import { ERROR_MESSAGE } from '../models/errorMessage';

function requestHandlerMiddleware(handlerFn: RequestHandler) {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      await Promise.resolve(handlerFn(req as any, res as any, next));
    } catch (error) {
      if(error.message.search('token') !== -1) {
        error.message = ERROR_MESSAGE.NOT_AUTHORIZED
        error.status = 403
      }
      next(error);
    }
  };
}

export default requestHandlerMiddleware;
