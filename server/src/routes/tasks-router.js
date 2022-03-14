import { Router } from 'express';
import { createList, getLists, saveTasks, updateList, saveLists } from '../controllers/tasks-controller.js';
import authMiddleware from '../middleware/auth-middleware.js';


const router = Router();

router.get('/', authMiddleware, getLists);

router.post('/', authMiddleware, createList);

router.post('/save-tasks', authMiddleware, saveTasks);

router.patch('/', authMiddleware, updateList);
// router.patch('/save-tasks', authMiddleware, updateTasks);
router.post('/save-lists', authMiddleware, saveLists);
export default router;