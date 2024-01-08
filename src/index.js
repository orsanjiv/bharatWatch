import dotenv from 'dotenv'
import dbConnection from './db/index.js'

dotenv.config({
    path: './.env'
})

dbConnection()