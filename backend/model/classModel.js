import mongoose, { mongo } from "mongoose";

const classSchema = new mongoose.Schema({
    className : {
        required : true
    },
    numberOfStudents : {
        type : mongoose.SchemaTypes.ObjectId,
        ref : "students"
    },
    numberOfTeachers : {
        type : mongoose.SchemaTypes.ObjectId,
        ref : "teachers"
    }
})