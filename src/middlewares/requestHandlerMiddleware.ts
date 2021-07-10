import { NextFunction, RequestHandler, Request, Response } from 'express';

function requestHandlerMiddleware(handlerFn: RequestHandler) {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      await Promise.resolve(handlerFn(req as any, res as any, next));
    } catch (error) {
      next(error);
    }
  };
}

export default requestHandlerMiddleware;
