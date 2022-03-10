import { Router } from 'express';
import { getLists } from '../controllers/tasks-controller.js';
import authMiddleware from '../middleware/auth-middleware.js';


const router = Router();

router.get('/', authMiddleware, getLists);

export default router;