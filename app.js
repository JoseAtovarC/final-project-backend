import express from 'express'
import cors from 'cors'
import multer from 'multer'
import signupRouter from './src/signup/signupRouter.js'
import userRouter from './src/user/userRouter.js'
import userAuth from './src/auth/auth.router.js'
import dataRouter from './src/data/dataRouter.js'
import publicInfo from './src/publicInfoHelper/PublicRouter.js'
import bookingRouter from './src/booking/BookingRouter.js'
import reviewRouter from './src/reviews/reviewsRouter.js'
import uploadRouter from './src/upload/uploadRouter.js'


const app = express()


app.use(express.json()) 
app.use(express.urlencoded({ extended: true })) 
app.use(cors())
app.use('/signup', signupRouter);
app.use('/auth', userAuth);
app.use('/user', userRouter);
app.use('/data', dataRouter);
app.use('/public', publicInfo);
app.use('/booking', bookingRouter);
app.use('/reviews', reviewRouter);
app.use('/static', express.static('public-static'));
app.use('/upload', uploadRouter); 


app.listen(process.env.PORT || 4000, function(){
  console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
});

