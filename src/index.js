import dotenv from 'dotenv'
import dbConnection from './db/index.js'
import express from 'express'

const app = express();
const port = process.env.PORT || 3000

dotenv.config({
    path: './.env'
})

dbConnection()
.then(()=>{
    app.listen(port,(res,req)=>{
        console.log(`Server is running at port ${port}`)
    })
})
.catch(error=>{
    console.log("Error: ", error)
})