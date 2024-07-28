import mongoose from "mongoose";

const studentSchema = mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    username : {
        type : String,
        required : true,
        unque : true
    },
    email: {
        type : String,
        required : true,
        unique : true
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
    }
},{timestamps :true})

export const students = mongoose.model("students",studentSchema);