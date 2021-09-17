
 import express from 'express'; 
 import {retrieveSignupInfoCtrl,validateUserController} from './signupController.js'
 import { isValidateReg } from '../middlewares.js';

 
 const router = express.Router(); 
 
 router.route('/') 
     .post(isValidateReg, retrieveSignupInfoCtrl); 

     router.route('/validate')
    .get(validateUserController);
  

 export default router;