import express from 'express';
import cors from 'cors';
import { MongoClient  } from 'mongodb';
import multer from 'multer';

const app = express();
const PORT  = 5555;
const URL = 'mongodb+srv://demo_bootcamp:demo_bootcamp@learning.c7hty.mongodb.net/?retryWrites=true&w=majority'
const BASE_IMG_PATH = '/static/img/';

/**
 * Creamos el storage de multer para que nos guarde las imagenes en disco
 */
const storage = multer.diskStorage({
    destination: function (req, file, callback) {
        callback(null, 'public-static');
    },
    filename: function (req, file, callback) {
        callback(null, file.originalname);
    }
});
const uploadMiddleware = multer({ storage }); // creo el middleware para que lo guarde en la carpeta

app.use(cors());
app.use('/static', express.static('public-static')); // expongo mi carpeta public-static al mundo

app.get('/flights', async (req,res) => {
    const client = await MongoClient.connect(URL);
    const flights = await client.db('demo').collection('flights').find().toArray();
    client.close();
    flights.forEach((e, i, arr) => {
        arr[i].origin.img =  BASE_IMG_PATH + arr[i].origin.img;
        arr[i].destination.img =  BASE_IMG_PATH + arr[i].destination.img;
    });
    res.send(flights);
});

// aqui se realizará el upload de los archivos
// en este caso solo se aceptan archivos cuyo name del input del formulario sea 'cities' 
//(ver cliente para analizar como está escrito el form)
app.post('/upload',uploadMiddleware.single('cities'), (req, res) => {
    console.log(req.file);
    res.send('Subida con existo')
});
app.listen(PORT, () => console.log('servidor levantado'));