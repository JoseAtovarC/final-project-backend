import express from 'express';
import { validateJWTAuth } from '../middlewares.js';
import { retrieveUserInfoCtrl,
    retrieveClientInfoCtrl,
    updateClientInfoCtrl, updateHelperInfoCtrl, retrieveHelperInfoCtrl,
 } from '../user/userController.js'

const router = express.Router();

router.use(validateJWTAuth);
router.route('/')
    .get(retrieveUserInfoCtrl);

router.route('/cliente')
    .patch(updateClientInfoCtrl)
    .get(retrieveClientInfoCtrl)

router.route('/ayudante')
    .patch(updateHelperInfoCtrl)
    .get(retrieveHelperInfoCtrl)


export default router;