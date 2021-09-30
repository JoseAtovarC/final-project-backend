import { MongoClient, ObjectId} from 'mongodb';



const URL = 'mongodb+srv://final-project:final-project1@cluster0.ttxbt.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';


export const HelperInfoPublic = async (id) => {

    const value = {
     _id:ObjectId(id.id)
    };
    
    const client = await MongoClient.connect(URL);
    const data = await client
      .db("mudanza-app")
      .collection("ayudantes-registrados")
      .findOne(value) 
    client.close();
    return data;
  };

  export const countBooking = async (user) => {
    
    const info = {
   
        emailHelper: user,
     type:"done"
    };
   
    const client = await MongoClient.connect(URL);
    const data = await client
      .db("mudanza-app")
      .collection("booking")
      .find(info)
      .toArray()
      client.close();
      return data.length
  };

