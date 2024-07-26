import mongoose, { mongo } from "mongoose";

const adminstratorSchema = mongoose.Schema({
    userName : {
        type : String,
        required : true
    },
    password : {
        type :String,
        required : true
    }
},{timestamps : true})

export const adminstrator = mongoose.model("adminstrators",adminstratorSchema);