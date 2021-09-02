import { validateReg, createUser } from "../model.js"
import md5 from "md5"


 export  const retrieveSignupInfoCtrl =async (req, res) => {
    let password=req.body.password
    let md5HASH=md5(password)
    console.log(md5HASH)
    createUser(req.body.email,md5HASH)
 }