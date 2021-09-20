import express from 'express';
import { uploadMiddleware,validateJWTAuth } from '../middlewares.js';




const router = express.Router();
router.use(validateJWTAuth);
router.route('/')
    .post(uploadMiddleware.single('image'), (req, res) => {
        console.log(req.file);
        res.send('Subida con existo')
    });; 

export default router;