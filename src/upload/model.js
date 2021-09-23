import { MongoClient} from 'mongodb';



const URL = 'mongodb+srv://final-project:final-project1@cluster0.ttxbt.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';

export const updateHelperImg = async (email,img,res) => {

    const query = {
        email:email,
      };
        const updateDoc={
            $set:{
                img:img
            }
            
          }
        
    const client = await MongoClient.connect(URL);
    const data = await client
          .db('mudanza-app')
            .collection('ayudantes-registrados')
            .updateOne(query,updateDoc) 
        }