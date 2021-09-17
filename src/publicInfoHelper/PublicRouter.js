import express from 'express';

import { 
    retrieveHelperInfoPublic } from './PublicController.js'

const router = express.Router();

    router.route('/:id')
    .get(retrieveHelperInfoPublic)

export default router;