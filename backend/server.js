import express, { json, urlencoded } from 'express';
import {config} from 'dotenv';
import { DB } from './config/configDB.js';
import adminRegistration from './controller/admin/registrationController.js';
import adminLogin from './controller/admin/loginController.js'
import adminForgetPassword from './controller/admin/forgotPasswordController.js'
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
app.post("/admin-signup", adminRegistration)
app.post("/admin-login", adminLogin)
app.post("/admin-forgot-password", adminForgetPassword)


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