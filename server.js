import express from 'express';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { router as authRouter } from './src/routes/authRoutes.js';
import { router as taskRouter } from './src/routes/taskRoutes.js';
import { errorHandler, notFound } from './src/middleware/errorHandler.js';
import { logger } from './src/utils/logger.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = Number(process.env.PORT) || 3000;

app.use(express.json({ limit: '100kb' }));
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use((req, _res, next) => {
  logger.info(`${req.method} ${req.originalUrl}`);
  next();
});

app.get('/api/health', (_req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

app.use('/api/auth', authRouter);
app.use('/api/tasks', taskRouter);
app.use('/api', notFound);
app.get('*', (_req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});
app.use(errorHandler);

if (process.env.NODE_ENV !== 'test') {
  app.listen(port, () => {
    logger.info(`StudyTrack TMS running at http://localhost:${port}`);
  });
}

export { app };
