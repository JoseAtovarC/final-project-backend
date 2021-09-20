import { validateReg,validateRegHelper } from "./model.js"
import jwt from 'jsonwebtoken';
import { secret } from "./auth/auth.secret.js";
import multer from 'multer'



export const isValidateReg=async (req,res,next)=>{
    
     const check = await validateReg(req.body.email)
     const checkHelper=await validateRegHelper(req.body.email)
     if(check || checkHelper){
         console.log('ya reg')
        res.status(409).send('error');
     }else{
        next()     
}     
}

//--------------------------middlewarejtw----------------

export const validateJWTAuth = (req, res, next) => {
   
    const headerAuth = req.get('Authorization'); 
    const jwtToken = headerAuth?.split(' ')[1]; 
    try{
        const jwtDecoded = jwt.verify(jwtToken, secret);
        req.email = jwtDecoded.user;
        next();
    }catch(err){
        console.log(err);
        res.status(401).send('Usuario sin token válido');
    }    
 }

 //////////////upload

 export const storage = multer.diskStorage({
    destination: function (req, file, callback) {
        callback(null, 'public-static');
    },
    filename: function (req, file, callback) {
        callback(null, file.originalname);
    }
});
export const uploadMiddleware = multer({ storage });