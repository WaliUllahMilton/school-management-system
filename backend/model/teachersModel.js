import mongoose, { model, Types } from "mongoose";

const teacherSchema = mongoose.Schema({
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
    classList : {
        type : String,
        // required : true,
    },
    attendance : {
        type : Date,
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