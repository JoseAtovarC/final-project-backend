import {HelperInfoPublic} from './model.js'

export const retrieveHelperInfoPublic = async (req, res) => {
   console.log(req.params)
    const data= await HelperInfoPublic(req.params)
    
    
    res.send(data);
 }