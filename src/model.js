import { MongoClient} from 'mongodb';
import nodemailer from 'nodemailer'


const URL = 'mongodb+srv://final-project:final-project1@cluster0.ttxbt.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';


//--------------modelReg---------------------------------

export const validateReg = async (user) => {
  const loginValue = {
    email: user,
  };
  const client = await MongoClient.connect(URL);
  const data = await client
    .db("mudanza-app")
    .collection("usuarios-registrados")
    .find(loginValue)
    .toArray();
  client.close();
  return data.length > 0;
};
export const validateRegHelper = async (user) => {

  const loginValue = {
    email: user,
  };
  const client = await MongoClient.connect(URL);
  const data = await client
    .db("mudanza-app")
    .collection("ayudantes-registrados")
    .find(loginValue)
    .toArray();
  client.close();
  return data.length > 0;
};



export const createUser = async (email,password,type,res) => {
  
 

      const user ={
        type:"pending..",
        email:email,
        password:password,
        userType:type
      }
      
  const client = await MongoClient.connect(URL);
  const data = await client
        .db('mudanza-app')
          .collection('usuarios-registrados')
          .insertOne(user) 
      }

      export const createUserHelper = async (email,password, type,res) => {
  
       
      
            const user ={
              type:"pending..",
              email:email,
              password:password,
              userType:type
            }
            
        const client = await MongoClient.connect(URL);
        const data = await client
              .db('mudanza-app')
                .collection('ayudantes-registrados')
                .insertOne(user) 
            }


      export const regTokenEmail = async (email,tokenEmail) => {
  
        console.log('Se ha conectado correctamente');
      
            const user ={
              email:email,
              token:tokenEmail
            }
        const client = await MongoClient.connect(URL);
        const data = await client
              .db('mudanza-app')
                .collection('email_verification')
                .insertOne(user) 
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
                  to:email,
                  subject: 'Message',
                  html: '<p><b>Hola</p>' +
                    `<p> Gracias por registrarte, verifica tu email  <a href="https://gomoving.herokuapp.com/signup?token=${tokenEmail}">Verificar</a>`,
                })   
            }



//---------------ModelAuth--------------------------

export const validateLogin = async (user,password) => {
  const loginValue = {
    
     email: user,
      password:password
    
  };
  const client = await MongoClient.connect(URL);
  const data = await client
    .db("mudanza-app")
    .collection("usuarios-registrados")
    .findOne(loginValue) 
  client.close();
  return data;
};


export const validateHelperLogin = async (user,password) => {
  const loginValue = {
    
       email: user,
       password:password
     
  };
  const client = await MongoClient.connect(URL);
  const data = await client
    .db("mudanza-app")
    .collection("ayudantes-registrados")
    .findOne(loginValue)
    
  client.close();
  return data;
};


///-------------modelUpdateToken------------
export const validateToken = async (token) => {
  const loginValue = {
    token: token,
  };
  const client = await MongoClient.connect(URL);
  const data = await client
    .db("mudanza-app")
    .collection("email_verification")
    .findOne(loginValue)
  return data;
};



export const deleteToken = async (token) => {
  const query = {
    id: token,
  };
  console.log('hola')
  const client = await MongoClient.connect(URL);
    client
    .db("mudanza-app")
    .collection("email_verification")
    .deleteOne(query)
    
};


export const updateUserMailVerification = async (user) => {
  const query = {
    email: user.email,
  };
  const updateDoc={
    $set:{
      type:"success"
    }
  }
  const client = await MongoClient.connect(URL);
    client
    .db("mudanza-app")
    .collection("usuarios-registrados")
    .updateOne(query,updateDoc)
    
};

export const updateUserHelperMailVerification = async (user) => {
  const query = {
    email: user.email,
  };
  const updateDoc={
    $set:{
      type:"success"
    }
  }
  const client = await MongoClient.connect(URL);
    client
    .db("mudanza-app")
    .collection("ayudantes-registrados")
    .updateOne(query,updateDoc)
    
};