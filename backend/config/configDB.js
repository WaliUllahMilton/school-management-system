import mongoose from "mongoose";
import { config } from "dotenv";
config();
export const DB = async()=>{
    try {
        mongoose.connect(process.env.DB)
        console.log("DB Connected")
    } catch (error) {
        console.log(error)   
    }
}