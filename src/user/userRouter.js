import express from 'express'; 


 
 const router = express.Router(); 
 
//  router.use(validateJWTAuth);
 router.route('/') 
     .get(); 

 export default router;