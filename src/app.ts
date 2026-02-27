import express from 'express';
import healthRouter from './routes/health';
import loopbackRouter from './routes/loopback';
import commandsRouter from './routes/commands';

const app = express();

app.use(express.json());

app.use('/api/v1/health', healthRouter);
app.use('/api/v1/loopback', loopbackRouter);
app.use('/api/v1/commands', commandsRouter);

export default app;
