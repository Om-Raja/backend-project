/* Below is general way, but in professional way we keep db connection function seperate in other file as shown beneath this bundle of commented part.

import mongoose from "mongoose"
import { DB_Name } from "./constant";
import express from "express"

const app = express();

//using IIFE(Immediately invoked function expression)
// (()=>{})();
//semicolon is used in beginning of IIFE to avoid error. Not neccessary.
;( async()=>{
    try{
        // database url and database name both are passed as argument to mongoose.connect( )
        await mongoose.connect(`${process.env.DATABASE_URL}/${DB_Name}`);
        app.on("error", (err)=>{
            console.error("ERR", err);
            throw err;
        });
        app.listen(process.env.PORT, ()=>{
            console.log(`Listening at ${process.env.PORT}`);
        })
    }catch(err){
        console.error("Error: ", err);
        throw err;
    }
})();


*/

import dotenv from "dotenv"; // dotenv should be imported first, so that it becomes available for all files before they need.

// using import dotenv from "dotenv" doesn't work so we include the line given below inside our script in package.json
// "dev": "nodemon -r dotenv/config --experimental-json-modules src/index.js"
import connectDB from "./db/db.js";
dotenv.config({
    path: "./env" // path of environment variable
})
connectDB();
