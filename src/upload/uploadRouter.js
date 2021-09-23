import express from 'express';
import { updateHelperImgCtrl } from './uoploadRouter.js';
import { uploadMiddleware,validateJWTAuth } from '../middlewares.js';




const router = express.Router();
router.use(validateJWTAuth);
router.route('/')
    .patch(uploadMiddleware.single('image'),updateHelperImgCtrl);; 

export default router;