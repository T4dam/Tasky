import { Router } from 'express';
import { getTasks } from '../controllers/tasks-controller.js';


const router = Router();

router.get('/', getTasks);

export default router;