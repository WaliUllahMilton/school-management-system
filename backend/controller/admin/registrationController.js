import bcrypt from 'bcrypt'
import { config } from "dotenv";
import { admin } from '../../model/adminModel.js';
config();
 const registrationController = async(req,res)=>{
    const {username,email,password,secretQuestion} = req.body;
    try {
        if(!username || !email || !password || !secretQuestion){
            return  res.status(400).json({
                    success : false,
                    message : "please fill all the field"
                    });
        }
        // console.log(typeof username);
        const checkExistingUser = await admin.find({})
        if(checkExistingUser && checkExistingUser.length !== 0 ){
            return res.status(401).json({
                success : false,
                message : "can not be more than one admin , if you forgot password then please recover it",
            })
        }
        const salt = Number(process.env.SALT_ROUND)
        const hashedPassword =await bcrypt.hash(password,salt)
        if(!email.includes("@")){
            return res.status(401).json({
                success : false,
                message : "invalid email"
            })
        }
        const user = new admin({
            username : username,
            email :email,
            password : hashedPassword,
            secretKey : secretQuestion
        })
        await user.save();
        if(user){
            user.password = undefined ;
            return res.status(201).json({
                success : true,
                message : "successfully created",
                data : user
            })
        }
    } catch (error) {
        console.log(error)
    }
}
export default registrationController;