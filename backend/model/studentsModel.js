import mongoose from "mongoose";

const studentSchema = mongoose.Schema({
    username : {
        type : String,
        required : true
    },
    class : {
        type : String,
        required :true
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
})

export const students = mongoose.model("students",studentSchema);