
import jwt from 'jsonwebtoken';
import {secret} from './auth.secret.js';
import { validateLogin } from "../model.js";


export const loginJWTController = async(req, res) => {
   
    const { email, password } = req.body;
   
    const userInfo = await validateLogin(email);
    console.log( userInfo)
   
    if (userInfo !== undefined && password === userInfo[0].password) {
        
        const token = jwt.sign({user: email}, secret);
   
        res.send({
            access_token: token
        });
    } else {
        res.status(404).send('Usuario/Contraseña erróneos')
        console.log('no');
    }

}