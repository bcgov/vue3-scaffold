import { helloService } from '../services';

import type { NextFunction, Request, Response } from 'express';

const controller = {
  getHello: async (_req: Request, res: Response, next: NextFunction) => {
    try {
      const response: unknown = await helloService.getHello();
      res.status(200).send(response);
    } catch (e: unknown) {
      next(e);
    }
  }
};

export default controller;
