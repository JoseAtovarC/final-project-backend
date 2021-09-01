import express from 'express'

const app = express()
const port = 3001

app.use(express.json()) 
app.use(express.urlencoded({ extended: true })) 

// app.use('/',);

  app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
  })

