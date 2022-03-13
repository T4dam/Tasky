import { Router } from 'express';
import { createList, getLists } from '../controllers/tasks-controller.js';
import authMiddleware from '../middleware/auth-middleware.js';


const router = Router();

router.get('/', authMiddleware, getLists);

router.post('/', authMiddleware, createList);

export default router;