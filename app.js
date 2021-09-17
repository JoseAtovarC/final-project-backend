import express from 'express'
import cors from 'cors'
import signupRouter from './src/signup/signupRouter.js'
import userRouter from './src/user/userRouter.js'
import userAuth from './src/auth/auth.router.js'
import dataRouter from './src/data/dataRouter.js'
import publicInfo from './src/publicInfoHelper/PublicRouter.js'
import bookingRouter from './src/booking/BookingRouter.js'

const app = express()
const port = 4000

app.use(express.json()) 
app.use(express.urlencoded({ extended: true })) 
app.use(cors())
app.use('/signup', signupRouter);
app.use('/auth', userAuth);
app.use('/user', userRouter);
app.use('/data', dataRouter);
app.use('/public', publicInfo);
app.use('/booking', bookingRouter);




  app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
  })

