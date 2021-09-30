
import express from 'express';

import { loginJWTController } from './auth.controller.js'

const router = express.Router();

router.route('/')
    .post(loginJWTController); 

export default router;