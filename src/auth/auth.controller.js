
import jwt from 'jsonwebtoken';
import {secret} from './auth.secret.js';
import { validateLogin } from "../model.js";
import { encodePassword } from '../utils/auth.utils.js';


export const loginJWTController = async(req, res) => {
   
    const { email, password } = req.body;
    let passwordEncode=encodePassword(password)
   
    const userInfo = await validateLogin(email);
   
    if (userInfo !== undefined && passwordEncode === userInfo[0].password) {
        
        const token = jwt.sign({user: email}, secret);
   
        res.send({
            access_token: token
        });
    } else {
        res.status(404).send('Usuario/Contraseña erróneos')
        console.log('no');
    }

}