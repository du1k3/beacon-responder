import { Router, Request, Response } from 'express';
import { buildMeta } from '../meta';

const router = Router();

const echo = (req: Request, res: Response): void => {
  res.json({ ...req.body, _meta: buildMeta(req) });
};

router.post('/', echo);
router.put('/', echo);

export default router;
