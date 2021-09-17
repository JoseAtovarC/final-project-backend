import express from 'express';

import {retriveHelpersInfoCtrl} from './dataController.js'

const router = express.Router();

router.route('/')
    .get(retriveHelpersInfoCtrl);



export default router;