import express, { json, urlencoded } from 'express';
import {config} from 'dotenv';
import { DB } from './config/configDB.js';
import adminstratorRegistration from './controller/adminstrators/registrationController.js';
import adminstratorLogin from './controller/adminstrators/loginController.js'
import adminstratorForgotPassword from './controller/adminstrators/forgotPasswordController.js'
import studentRegistration from './controller/students/registrationController.js';
import studentLogin from './controller/students/loginController.js';
import studentFortgotPassword from './controller/students/forgotPasswordController.js'
import teacherRegistration from './controller/teachers/registrationController.js'
import teacherLogin from './controller/teachers/loginController.js'
import teacherForgotPassword from './controller/teachers/forgotPasswordController.js'
import { studentAttendance, studentAttendanceUbdate } from './controller/student attendances/studentAttendanceController.js';

const app = express();
DB();

config()
config()
app.use(express.json())
app.use(express.urlencoded({extended :true}))

app.listen(process.env.PORT,()=>{
    console.log(`Server is running on http://localhost:${process.env.PORT}`)
})

app.get("/",(rer,res)=>{
    res.send("hello");
})
// route for adminstrator 
app.post("/adminstrator-signup", adminstratorRegistration)
app.post("/adminstrator-login", adminstratorLogin)
app.post("/adminstrator-forgot-password", adminstratorForgotPassword)


//route for student
app.post("/student-signup", studentRegistration)
app.post("/student-login", studentLogin)
app.post("/student-forgot-password", studentFortgotPassword)


//route for teacher
app.post("/teacher-signup", teacherRegistration)
app.post("/teacher-login", teacherLogin)
app.post("/teacher-forgot-password", teacherForgotPassword)

app.post("/studen-attandance",studentAttendance)
app.post("/studen-attandance/update",studentAttendanceUbdate)