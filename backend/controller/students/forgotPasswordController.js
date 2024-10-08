import { config } from "dotenv";
import { students } from "../../model/studentsModel.js";
import bcrypt from 'bcrypt'

config();

const forgotPasswordController = async(req,res)=>{
    const {email,secretQuestion,password} = req.body;
    try {
        if(!email || !secretQuestion || !password){
            return res.status(400).json({
                success : false,
                message : "please fill all the field"
            });
        }
        const existingUser = await students.findOne({email:email})
        if(!existingUser){
            return res.status(401).json({
                success : false,
                message : "user not exist"
            });
        }
        const comparePassword = await bcrypt.compare(password,existingUser.password);
        if(comparePassword){
            return res.status(401).json({
                success : false,
                message : "this is your current password please login",
            })
        }
        if(existingUser.secretKey === secretQuestion){
            const salt = Number(process.env.SALT_ROUND)
            const hashedPassword = await bcrypt.hash(password,salt);
            const data = await students.findByIdAndUpdate({_id : existingUser._id},{password : hashedPassword});
            data.password = undefined;
            return res.status(200).json({
                success : true,
                message : "password has been changed",
                data : data
            })
        }
        return res.status(400).json({
            success :false,
            message : "something went wrong",
        })
    } catch (error) {
        console.log(error);
    }
}

export default forgotPasswordController;