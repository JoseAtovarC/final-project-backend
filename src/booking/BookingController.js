import { createBooking,messageBooking,clientInfo,updateBooking,
  updateCanceledBooking, helperInfo,infoBooking,
  updateBookingConfirm,clientInfoName,updateFinishBooking
 } from "./model.js"


export const createBookingController = async (req, res) => {
   const infoClient= await clientInfo(req.email)
   const infoHelper=await  helperInfo(req.body.emailHelper) 
   createBooking(req.email,req.body,infoClient.nombre,infoHelper.nombre) 
   res.send('ok')
 }

 export const messageHelperBooking = async (req, res) => {
  console.log(req.email)
   const data=await messageBooking(req.email)

   const infoMessage={   
     data}
   res.send( infoMessage);
   
 }

 export const updateBookingController = async (req, res) => {

    
   const startDate=new Date(req.body.startDate)
   const endDate=new Date(req.body.endDate)
  

  const infoClient= await clientInfoName(req.body.nombreClient)

    if(req.body.response==="Aceptar"){  
      console.log(req.body.endDate) 
   await updateBooking(req.email,req.body,startDate,endDate,infoClient.email)
   res.send( 'accepted')
   
    }else if(req.body.response==="Cancelar"){  
      await updateCanceledBooking(req.email,req.body,startDate,endDate,infoClient.email,)
      res.send( )}
     else if(req.body.response==="Terminar"){
      await updateFinishBooking(req.email,req.body.nombreHelper,)
      res.send( )
     }
     else if(req.body.response==="confirm"){
       console.log(req.body.nombreHelper)
      await updateBookingConfirm (req.email,req.body.nombreHelper,)
      res.send( )
     }
      
    }


 