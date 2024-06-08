const express = require('express')
const mongoose = require('mongoose')
const app = express()
const user = require('./models/models')
const Format = require('date-fns')
const env = require('dotenv')
const route = require('./routes/route')
env.config()

const port =  3000;
app.use(express.json())
app.use("/api/users", route)


mongoose.connect(process.env.STRING_CONNECTION
).then(()=> {console.log("Database connected"),
      app.listen(port,  function(){
      console.log(`Listening on port ${port}`)
    })
})
.catch(err => console.error("Database connection error: ", err))

