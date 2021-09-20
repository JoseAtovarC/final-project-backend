import { MongoClient, ObjectId} from 'mongodb';



const URL = 'mongodb+srv://final-project:final-project1@cluster0.ttxbt.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';




export const createReview = async (email,body,endDate,nameClient) => {
    
        const reviewInfo ={
         emailCient:email,
         emailHelper:body. emailHelper,
         nameHelper:body.nameHelper,
         nameClient:nameClient,
         review:body.review,
         rating:body.rating,
         endDate:endDate.toISOString()

        }
        
    const client = await MongoClient.connect(URL);
    const data = await client
          .db('mudanza-app')
            .collection('reviews')
            .insertOne(reviewInfo) 
        }



        export const infoHelperReview = async (email) => {
    
          const reviewInfo ={
           
            emailHelper:email.email,
        
          }
          
      const client = await MongoClient.connect(URL);
    
            const data = await client
            .db("mudanza-app")
            .collection("reviews")
            .find(reviewInfo)
            .toArray();
            client.close();
          return data;
          }