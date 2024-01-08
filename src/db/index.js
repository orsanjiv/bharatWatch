import mongoose from "mongoose";
import dotenv from "dotenv";
import { DB_NAME } from "../constants.js";

const dbConnection = async() =>{
    try{
        const connectionInstance = await mongoose.connect(`${process.env.DB_URL}/${DB_NAME}`)
        console.log('DB connected successfully  to MongoDB')
        
    }
    catch(err){
        console.log("DB Connection FAILED",err)
        process.exit(1)
    }
}

export default dbConnection