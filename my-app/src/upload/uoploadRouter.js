import {updateHelperImg} from './model.js'
import { PublicPath } from '../utils/auth.utils.js'



export const updateHelperImgCtrl = async (req, res) => {

    console.log(req.file.filename)
    const img=`${PublicPath}${req.file.filename}`
    
    updateHelperImg(req.email,img)
    
 
 }