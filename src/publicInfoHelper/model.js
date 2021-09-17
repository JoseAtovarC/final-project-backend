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