import mongoose, { mongo } from "mongoose";

const adminstratorSchema = mongoose.Schema({
    username : {
        type : String,
        required : true
    },
    email : {
        type : String,
        required :true
    },
    password : {
        type :String,
        required : true
    }
},{timestamps : true})

export const adminstrator = mongoose.model("adminstrators",adminstratorSchema);