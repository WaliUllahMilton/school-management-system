import mongoose from "mongoose";

const adminSchema = mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    username : {
        type : String,
        required : true,
        unique : true
    },
    email : {
        type : String,
        required :true,
        unique : true
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