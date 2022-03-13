import { Router } from 'express';
import { createList, getLists, saveTasks } from '../controllers/tasks-controller.js';
import authMiddleware from '../middleware/auth-middleware.js';


const router = Router();

router.get('/', authMiddleware, getLists);

router.post('/', authMiddleware, createList);

router.post('/save-tasks', authMiddleware, saveTasks);

export default router;