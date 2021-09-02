import express from 'express'
import cors from 'cors'
import signupRouter from './src/signup/signupRouter.js'
import userRouter from './src/user/userRouter.js'
import userAuth from './src/auth/auth.router.js'


const app = express()
const port = 4000

app.use(express.json()) 
app.use(express.urlencoded({ extended: true })) 
app.use(cors())


app.use('/signup', signupRouter);
app.use('/auth', userAuth);
app.use('/login', userRouter);

  app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
  })

