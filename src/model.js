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



export const createUser = async (email,password,res) => {
  
  console.log('Se ha conectado correctamente');

      const user ={ email:email,
        password:password}
  const client = await MongoClient.connect(URL);
  const data = await client
        .db('mudanza-app')
          .collection('usuarios-registrados')
          .insertOne(user) 
  ///-------sendEmail---------------------        
          let transporter = nodemailer.createTransport({
            host: "smtp.gmail.com",
            port: 465,
            secure: true, 
            auth: {
              user: 'gurumbertotovar@gmail.com', 
              // pass: '',
            },
            tls: {
              rejectUnauthorized: false
            }
          });
          await transporter.sendMail({
            from: 'gurumbertotovar@gmail.com',
            to: email,
            subject: 'Message',
            html: '<p><b>Hola</p>' +
              '<p> Gracias por registrarte, ya puedes seguir navegando en http://localhost:3000 </p>',
          })
          
      }


//---------------ModelAuth--------------------------

export const validateLogin = async (user) => {
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
  return data;
};