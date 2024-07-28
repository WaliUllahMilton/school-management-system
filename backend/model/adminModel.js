import mongoose from "mongoose";

const adminSchema = mongoose.Schema({
    username : {
        type : String,
        required : true
    },
    email : {
        type : String,
        required :true
    },
    secretKey : {
        type : String,
        required : true
    },
    role : {
        type : String,
        default : "admin"
    },
    password : {
        type :String,
        required : true
    }
},{timestamps : true})

export const admin = mongoose.model("admin",adminSchema);