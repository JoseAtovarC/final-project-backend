import {HelperInfoPublic,countBooking} from './model.js'

export const retrieveHelperInfoPublic = async (req, res) => {
   console.log(req.params)
    const data= await HelperInfoPublic(req.params)
    
    const count=await countBooking(data.email)
      const info=[
         count,
         data
      ]
    res.send(info);
 }

