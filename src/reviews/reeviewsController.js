import {createReview,infoHelperReview} from './model.js'
import { clientInfo  } from '../booking/model.js'



export const createReviewsController = async (req, res) => {
    const infoClient= await clientInfo(req.email)
    const endDate=new Date(req.body.endDate)
    console.log(endDate)
    createReview(req.email,req.body,endDate,infoClient.nombre)
    res.send("ok")

     }

     export const retrieveHelperReviewsPublic = async (req, res) => {
        console.log(req.params)
       const data= await infoHelperReview(req.params) 
       res.send(data)
           
      }