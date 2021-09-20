import { MongoClient} from 'mongodb';

const URL = 'mongodb+srv://final-project:final-project1@cluster0.ttxbt.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';


export const retrieveHelpersInfo = async () => {
    const Value = {
      userType: "ayudante",
    };
    const client = await MongoClient.connect(URL);
    const data = await client
      .db("mudanza-app")
      .collection("ayudantes-registrados")
      .find(Value)
      .toArray();
      client.close();
    return data;
  };