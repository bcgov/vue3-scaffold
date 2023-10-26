import express from 'express';
import { helloController } from '../../controllers';
import { requireSomeAuth } from '../../middleware/requireSomeAuth';

import type { NextFunction, Request, Response } from 'express';

const router = express.Router();
router.use(requireSomeAuth);

// Hello endpoint
router.get('/', (req: Request, res: Response, next: NextFunction): void => {
  helloController.getHello(req, res, next);
});

export default router;
