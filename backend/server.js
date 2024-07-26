import express, { json, urlencoded } from 'express';
import {config} from 'dotenv';
import { DB } from './config/configDB.js';
import studentRegistration from './controller/students/registrationController.js';
import studentLogin from './controller/students/loginController.js';


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
app.post("/student-signup", studentRegistration)
app.post("/student-login", studentLogin)