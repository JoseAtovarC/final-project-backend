import express from 'express'; 
import { validateJWTAuth } from '../middlewares.js';
import {retrieveUserInfoCtrl} from '../user/userController.js'

 
 const router = express.Router(); 
 
 router.use(validateJWTAuth);
 router.route('/') 
     .get(retrieveUserInfoCtrl); 

 export default router;