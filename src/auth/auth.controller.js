
import jwt from 'jsonwebtoken';
import {secret} from './auth.secret.js';
import { validateLogin,validateHelperLogin } from "../model.js";
import { encodePassword } from '../utils/auth.utils.js';


export const loginJWTController = async(req, res) => {
   
    const { email, password } = req.body;
    let passwordEncode=encodePassword(password)
    const userInfo = await validateLogin(email,passwordEncode);
    const helperInfo = await validateHelperLogin(email,passwordEncode);
    console.log(helperInfo)

    if (userInfo !== null){
        const token = jwt.sign({user: email, type:userInfo.userType}, secret);
        res.send({
            access_token: token
        });
    } 
         else if(helperInfo !== null){ 
             const token = jwt.sign({user: email, type: helperInfo.userType}, secret);
         res.send({
             access_token: token
     })}
    else{
        res.status(404).send('Usuario/Contraseña erróneos')
        console.log('no');
    }
}