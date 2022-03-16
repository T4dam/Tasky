import express from 'express';
import morgan from 'morgan';
import { config } from 'dotenv';
import authRouter from './routes/auth-router.js';
import profileRouter from './routes/profile-router.js';
import tasksRouter from './routes/tasks-router.js';
import cors from 'cors';
import './database/index.js';

config();
const server = express();
const { SERVER_PORT, PUBLIC_PATH } = process.env;

server.use(morgan('tiny'));
server.use(cors());
server.use(express.json());
server.use(express.static(PUBLIC_PATH));

server.use('/api/auth', authRouter);
server.use('/api/profile', profileRouter);
server.use('/api/tasks', tasksRouter);

server.listen(SERVER_PORT, () => {
  console.log(`serveris veikia ant http://localhost:${SERVER_PORT}/`);
});
