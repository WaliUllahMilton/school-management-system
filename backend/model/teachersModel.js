import mongoose from "mongoose";

const teacherSchema = mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    username : {
        type : String,
        required : true
    },
    email : {
        type : String,
        required : true
    },
    sallery : {
        type : Number,
    },
    role : {
        type : String,
        default : "teacher"
    },
    secretKey : {
        type : String,
        required : true
    },
    password : {
        type : String,
        required : true
    }
},{timestamps : true})

export const teachers = mongoose.model("teachers",teacherSchema)