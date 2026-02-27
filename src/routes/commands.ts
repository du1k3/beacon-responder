import { Router, Request, Response } from 'express';
import { buildMeta } from '../meta';

const router = Router();

const commands = [
  { id: 1, name: 'start', description: 'Start the service' },
  { id: 2, name: 'stop', description: 'Stop the service' },
  { id: 3, name: 'restart', description: 'Restart the service' },
  { id: 4, name: 'status', description: 'Check service status' },
];

router.get('/', (req: Request, res: Response) => {
  res.json({ commands, _meta: buildMeta(req) });
});

export default router;
