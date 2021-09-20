import express from 'express';
import { validateJWTAuth } from '../middlewares.js';
import { createReviewsController,retrieveHelperReviewsPublic } from './reeviewsController.js';



const router = express.Router();

router.route('/')
    .post(validateJWTAuth, createReviewsController )

    router.route('/:email')
    .get(retrieveHelperReviewsPublic)
    

export default router;