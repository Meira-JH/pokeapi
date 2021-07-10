import { Request, Response } from 'express';
import { FAILURE_MESSAGE } from '../models/errorMessage';

function notFoundRouteMiddleware(req: Request, res: Response): void {
  res.status(404).send(FAILURE_MESSAGE.NOT_FOUND_ROUTE);
}

export default notFoundRouteMiddleware;
