import express, { json, urlencoded } from 'express';
import {config} from 'dotenv';
import { DB } from './config/configDB.js';
import adminstratorRegistration from './controller/adminstrators/registrationController.js';
import adminstratorLogin from './controller/adminstrators/loginController.js'
import adminstratorForgotPassword from './controller/adminstrators/forgotPasswordController.js'
import studentRegistration from './controller/students/registrationController.js';
import studentLogin from './controller/students/loginController.js';
import studentFortgotPassword from './controller/students/forgotPasswordController.js'

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



app.post("/student-signup", studentRegistration)
app.post("/student-login", studentLogin)
app.post("/student-forgot-password", studentFortgotPassword)
// app.post("/student-forgot-password", studentFortgotPassword)