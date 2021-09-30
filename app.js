import express from 'express'
import cors from 'cors'
import multer from 'multer'
import signupRouter from './my-app/src/signup/signupRouter.js'
import userRouter from './my-app/src/user/userRouter.js'
import userAuth from './my-app/src/auth/auth.router.js'
import dataRouter from './my-app/src/data/dataRouter.js'
import publicInfo from './my-app/src/publicInfoHelper/PublicRouter.js'
import bookingRouter from './my-app/src/booking/BookingRouter.js'
import reviewRouter from './my-app/src/reviews/reviewsRouter.js'
import uploadRouter from './my-app/src/upload/uploadRouter.js'

const app = express()
const port = process.env.PORT|| 4000

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


  app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
  })

