import mongoose from "mongoose";
import { DB_Name } from "../constant.js";

const connectDB = async () => {
    try{
        const connectionInstance = await mongoose.connect(`${process.env.DATABASE_URL}/${DB_Name}`);
        console.log("DB connection successful !! ", connectionInstance.connection.host);;
    }catch(error){
        console.error("DB connection FAIL !! ", error);
    }
}

export default connectDB;