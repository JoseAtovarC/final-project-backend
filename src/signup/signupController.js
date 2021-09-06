import { validateReg, createUser } from "../model.js"
import {encodePassword} from '../utils/auth.utils.js'


 export  const retrieveSignupInfoCtrl =async (req, res) => {
    let password= encodePassword(req.body.password)

    createUser(req.body.email,password)
    res.send('okk')
 }