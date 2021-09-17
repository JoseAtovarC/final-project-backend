import { createUser,regTokenEmail,updateUserMailVerification,
  validateToken,
  deleteToken,createUserHelper,
  updateUserHelperMailVerification,
  validateLogin
} from "../model.js"
import {encodePassword, generateRandomEmailToken} from '../utils/auth.utils.js'


 export  const retrieveSignupInfoCtrl =async (req, res) => {
    let password= encodePassword(req.body.password)
    const tokenEmailVerification = generateRandomEmailToken();
    if(req.body.userType==="cliente"){
    createUser(req.body.email,password,req.body.userType)}else{
      createUserHelper(req.body.email,password,req.body.userType)
    }
      regTokenEmail(req.body.email,tokenEmailVerification)
    res.send('okk')
 }



 export const validateUserController = async(req, res) => {
 
  const email = await validateToken(req.query.token);
  const userInfo = await validateLogin(email.email);

  if (email !== undefined) {  
    if(userInfo !==null){
      updateUserMailVerification(email);
      deleteToken(email.id)
      res.status(200).send();}else{
        updateUserHelperMailVerification(email);
        deleteToken(email.id)
        res.status(200).send();
      }
  } else {
     
      res.status(400).send('El token no es valido');
  }

}