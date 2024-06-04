// mongoose.set(‘strictQuery’, true) 
// require('dotenv').config({path: './env'})
import dotenv from "dotenv";
// Second approach
import connectDB from "./db/index.js";

dotenv.config({
    path:'./env'
});


connectDB()
.then(()=>{
    application.listen(process.env.PORT||8000,()=>{
        console.log(`Server is running at port: ${process.env.PORT}`);
    });
})
.catch((err)=>{
    console.log("MONGODB connection failed!!");
})




/*// first Approach
import mongoose from "mongoose"
import {DB_NAME} from "./constants.js"

import express from "express";
const app = express();

// ife = immediately execute function
( async () => {
    try{
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
        app.on("error",(error) => {
            console.log("Error", error);
            throw error
        })

        app.listen(process.env.PORT,()=> {
            console.log(`Server is listening on port ${process.env.PORT}`)
        })
    }catch(error){
        console.error("ERROR:",error);
    }
})()

*/
