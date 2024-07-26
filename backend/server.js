import express from 'express';
import {config} from 'dotenv';
import { DB } from './config/configDB.js';


const app = express();
DB();

config()


app.listen(process.env.PORT,()=>{
    console.log("Server is running")
})