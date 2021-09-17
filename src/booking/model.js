import { MongoClient, ObjectId} from 'mongodb';
import nodemailer from 'nodemailer'


const URL = 'mongodb+srv://final-project:final-project1@cluster0.ttxbt.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';


export const createBooking = async (emailToken,body,nameClient,nameHelper) => {

    const booking = {
     emailClient:emailToken ,
     emailHelper:body.emailHelper,
     startDate: body.startDate,
     endDate: body.endDate,
     type:"pending",
     nombreClient:nameClient,
     nombreHelper:nameHelper,
    
    };
    
    const client = await MongoClient.connect(URL);
    const data = await client
      .db("mudanza-app")
      .collection("booking")
      .insertOne(booking) 
      ///-------sendEmail---------------------        
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true, 

      auth: {
        user: 'gurumbertotovar@gmail.com', 
        pass: 'zmyykimefjnxbuke',
      },
      tls: {
        rejectUnauthorized: false
      }
    });
    await transporter.sendMail({
      from: 'gurumbertotovar@gmail.com',
      to:body.emailHelper,
      subject: 'Message',
      html: '<p><b>Tienes una solcitud de reserva</p>' +
        `<p> revisa tu perfil `,
    }) 
    client.close();
    
  };



  export const messageBooking = async (user) => {

    const info = {
      $or:[
        {emailHelper: user},
     { emailClient:user}]
    };
    const client = await MongoClient.connect(URL);
    const data = await client
      .db("mudanza-app")
      .collection("booking")
      .find(info)
      .toArray();
    client.close();
    return data;
  };


  export const clientInfo = async (user) => {
    const info = {
      email: user,
    };
    const client = await MongoClient.connect(URL);
    const data = await client
      .db("mudanza-app")
      .collection("usuarios-registrados")
      .findOne(info)
    client.close();
    return data;
  };

  
  export const clientInfoName = async (user) => {
    const info = {
      nombre: user,
    };
    const client = await MongoClient.connect(URL);
    const data = await client
      .db("mudanza-app")
      .collection("usuarios-registrados")
      .findOne(info)
    client.close();
    return data;
  };

  //////UpdateBooking------------------

  export const updateBooking = async (user,helper,emailClient) => {
    
    const query = {
      emailHelper: user,
      nombreClient:helper
    };
    const updateDoc={
      $set:{
        type:"accepted"
      }
    }
    const client = await MongoClient.connect(URL);
    const data = await client
      .db("mudanza-app")
      .collection("booking")
      .updateOne(query,updateDoc)
      
     
      ///-------sendEmail---------------------        
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true, 

      auth: {
        user: 'gurumbertotovar@gmail.com', 
        pass: 'zmyykimefjnxbuke',
      },
      tls: {
        rejectUnauthorized: false
      }
    });
    await transporter.sendMail({
      from: 'gurumbertotovar@gmail.com',
      to:emailClient,
      subject: 'Message',
      html: '<p><b>El ayudante ha aceptado tu Reserva</p>' 
        
    }) 
    return data
    client.close();

  };


  export const helperInfo = async (v) => {
    const user = {
      email: v,
    };
    const client = await MongoClient.connect(URL);
    const data = await client
      .db("mudanza-app")
      .collection("ayudantes-registrados")
      .findOne(user)
      
    client.close();
    return data;
  };

  export const infoBooking = async (user,nameClient) => {

    const info = {
      emailHelper: user,
      nombreClient:nameClient
    };
    const client = await MongoClient.connect(URL);
    const data = await client
      .db("mudanza-app")
      .collection("booking")
      .findOne(info)
    client.close();
    return data;
  };




  ////////canceled--------------------------

  export const updateCanceledBooking = async (emailHelper,nameClient,emailClient) => {
    
   const query = {
      emailHelper: emailHelper,
      nombreClient:nameClient
    };
    const updateDoc={
      $set:{
        type:"canceled"

      }
    }
    const client = await MongoClient.connect(URL);
    const data = await client
      .db("mudanza-app")
      .collection("booking")
      .updateOne(query,updateDoc)
       ///-------sendEmail---------------------        
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true, 

      auth: {
        user: 'gurumbertotovar@gmail.com', 
        pass: 'zmyykimefjnxbuke',
      },
      tls: {
        rejectUnauthorized: false
      }
    });
    await transporter.sendMail({
      from: 'gurumbertotovar@gmail.com',
      to:emailClient,
      subject: 'Message',
      html: '<p><b>El ayudante ha rechazado tu Reserva</p>' +
        `<p> prueba con otro de nuestros ayudantes `,
    }) 
    client.close();
    
  };



////////////////confirm---------------
  
  export const updateBookingConfirm = async (user,helper) => {
    
    const query = {
      emailClient: user,
      nombreHelper:helper
    };
    const updateDoc={
      $set:{
        confirm:"accepted"
      }
    }
    const client = await MongoClient.connect(URL);
    const data = await client
      .db("mudanza-app")
      .collection("booking")
      .updateOne(query,updateDoc)
      client.close();
      return data
  };


  /////////////////done-------

  export const updateFinishBooking = async (user,helper) => {
    
    const query = {
      emailClient: user,
      nombreHelper:helper
    };
    const updateDoc={
      $set:{
        confirm:"done"
      }
    }
    const client = await MongoClient.connect(URL);
    const data = await client
      .db("mudanza-app")
      .collection("booking")
      .updateOne(query,updateDoc)
      client.close();
      return data
  };
  
  
      
  

  