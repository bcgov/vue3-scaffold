import express from 'express';

import { helloController } from '../../controllers';

import type { NextFunction, Request, Response } from 'express';

const router = express.Router();

// Hello endpoint
router.get('/', (req: Request, res: Response, next: NextFunction): void => {
  helloController.getHello(req, res, next);
});

export default router;
