
 import express from 'express'; 
 import {retrieveSignupInfoCtrl} from './signupController.js'
 import { isValidateReg } from '../middlewares.js';

 
 const router = express.Router(); 
 
//  router.use(validateJWTAuth);
 router.route('/') 
     .post(isValidateReg, retrieveSignupInfoCtrl); 

 export default router;