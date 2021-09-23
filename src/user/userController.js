
import {updateHelper,updateClient,validateLogin, validateHelperLogin} from './model.js'



export const retrieveUserInfoCtrl = async (req, res) => {
   
    console.log(req.email)
    const userInfo = await validateLogin(req.email);
    const helperInfo = await validateHelperLogin(req.email);
      
    if(helperInfo !==null){
        delete helperInfo.password;
    res.send(helperInfo);
    }
    else if(userInfo !==null){
        delete userInfo.password;
    res.send(userInfo);
    }
    
}


export const updateClientInfoCtrl = async (req, res) => {
    console.log('hola')
   await updateClient(req.email,req.body)    
    res.status(200).send("hola");
 
 }

 export const retrieveClientInfoCtrl = async (req, res) => {
    console.log(req.email)
    const clientInfo = await validateLogin(req.email);
    console.log(clientInfo)
    delete clientInfo.password;
    res.send(clientInfo);
    
 }

//////---------helper---------------------------

export const updateHelperInfoCtrl = async (req, res) => {
    updateHelper(req.email,req.body)
    res.send("ok")
           
    res.status(200).send();
 
 }

 export const retrieveHelperInfoCtrl = async (req, res) => {
    console.log(req.email)
    const helperInfo = await validateHelperLogin(req.email);
    delete helperInfo.password;
    res.send(helperInfo);
 }


