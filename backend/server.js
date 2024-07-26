import express, { json, urlencoded } from 'express';
import {config} from 'dotenv';
import { DB } from './config/configDB.js';
import { teachers } from './model/teachersModel.js';


const app = express();
DB();

config()
app.use(express.json())
app.use(express.urlencoded({extended :true}))

app.listen(process.env.PORT,()=>{
    console.log(`Server is running on http://localhost:${process.env.PORT}`)
})

app.get("/",(rer,res)=>{
    res.send("hello");
})
app.post("/signup",async(req,res)=>{
    const {userName,password} = req.body;
    console.log(userName)
    try {
        if(!userName || !password){
            res.status(400).json({
                success :false
            })
        }
        const data = await new teachers({
            userName : userName,
            password : password
        })
        data.save()
        if(data){
            res.status(201).json({
                success : true
            })
        }
    } catch (error) {
        console.log(error)
    }
})