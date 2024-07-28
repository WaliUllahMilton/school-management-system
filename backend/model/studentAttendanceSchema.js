import mongoose, { Types } from "mongoose";


const studentAttendanceSchema = new mongoose.Schema({
    date : {
        type : Date,
        required : true
    },
    student : {
        type : mongoose.SchemaTypes.ObjectId,
        ref : "students"
    },
    attendance : {
        type : String,
        enum : ["Absent","Present"],
        default : "Absent"
    }
},{timestamps : true});

export const studentAttendances = mongoose.model("studentAttendances",studentAttendanceSchema);