import { MongoClient} from 'mongodb';



const URL = 'mongodb+srv://final-project:final-project1@cluster0.ttxbt.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';

export const updateHelper = async (email,user) => {

    const query = {
        email:email,
      };
        const updateDoc={
            $set:user
            
          }
        
    const client = await MongoClient.connect(URL);
    const data = await client
          .db('mudanza-app')
            .collection('ayudantes-registrados')
            .updateOne(query,updateDoc) 
        }

        export const updateClient = async (email,user,res) => {

          const query = {
              email:email,
            };
            
              const updateDoc={
                  $set:user
                  
                }
              
          const client = await MongoClient.connect(URL);
          const data = await client
                .db('mudanza-app')
                  .collection('usuarios-registrados')
                  .updateOne(query,updateDoc) 
              }


              
export const validateLogin = async (user,password) => {
  const loginValue = {
    
     email: user,
      
    
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
    
     
  };
  const client = await MongoClient.connect(URL);
  const data = await client
    .db("mudanza-app")
    .collection("ayudantes-registrados")
    .findOne(loginValue)
    
  client.close();
  return data;
};