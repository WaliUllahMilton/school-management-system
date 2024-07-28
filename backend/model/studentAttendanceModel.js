import mongoose from "mongoose";


const studentAttendanceSchema = new mongoose.Schema({
    date : {
        type : Date
    },
    student : {
        type : mongoose.SchemaTypes.ObjectId,
        ref : "students"
    },
    attendance : {
        type : String,
        enum : ["Absent","Present"],
        default : "Absent"
    },
    subject : {
        type : String,
        requirer : true
    }
},{timestamps : true});

export const studentAttendances = mongoose.model("studentAttendances",studentAttendanceSchema);