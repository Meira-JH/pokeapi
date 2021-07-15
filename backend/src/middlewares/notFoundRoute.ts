import { Request, Response } from 'express';
import { ERROR_MESSAGE } from '../models/errorMessage';

function notFoundRouteMiddleware(req: Request, res: Response): void {
  res.status(404).send(ERROR_MESSAGE.NOT_FOUND_ROUTE);
}

export default notFoundRouteMiddleware;
