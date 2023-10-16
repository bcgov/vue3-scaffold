import express from 'express';
import hello from './hello';

const router = express.Router();

// Base v1 Responder
router.get('/', (_req, res) => {
  res.status(200).json({
    endpoints: [
      '/hello',
    ]
  });
});

/** Config Router */
router.use('/hello', hello);

export default router;
