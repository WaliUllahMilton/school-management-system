import mongoose, { model, Types } from "mongoose";

const teacherSchema = mongoose.Schema({
    userName : {
        type : String,
        required : true
    },
    sallery : {
        type : Number,
    },
    students : {
        type : mongoose.ObjectId,
        ref : "students"
    },
    classList : {
        type : Number,
        // required : true,
    },
    attendance : {
        type : Date,
    },
    password : {
        type : String,
        required : true
    }
})

export const teachers = mongoose.model("teachers",teacherSchema)