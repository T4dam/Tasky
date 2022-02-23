import { Router } from 'express';
import { updateImage, updateProfile } from '../controllers/user-profile-controller.js';
import authMiddleware from '../middleware/auth-middleware.js';
import imgUploadMiddleware from '../middleware/img-upload-middleware.js';

const router = Router();

router.put('/img', authMiddleware, imgUploadMiddleware.single('img'), updateImage);

router.patch('/', authMiddleware, updateProfile);

export default router;