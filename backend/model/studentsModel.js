import mongoose from "mongoose";

const studentSchema = mongoose.Schema({
    username : {
        type : String,
        required : true
    },
    email: {
        type : String,
        required : true
    },
    whichClass : {
        type : String,
        required :true
    },
    secretKey :{
        type : String,
        required : true
    },
    password : {
        type : String,
        required : true
    },
    attendance : {
        type : String
    },
    result : {
        type : Array
    }
},{timestamps :true})

export const students = mongoose.model("students",studentSchema);