import { students } from "../../model/studentsModel.js";
import bcrypt from 'bcrypt';

const loginController = async(req,res)=>{
    const {email,password} = req.body;
    try {
        if(!email || ! password){
            return res.status(400).json({
                success : false,
                message : "username and password required"
            });
        }
        const checkExistingUser = await students.findOne({email : email})
        if(!checkExistingUser){
            return res.status(400).json({
                success :false,
                message : "please sign up first"
            });
        }
        const comparePassword =await bcrypt.compare(password,checkExistingUser.password);
        if(!comparePassword){
            return res.status(400).json({
                success :false,
                message : "wrong password"
            });
        }
        checkExistingUser.password = undefined ;
        return  res.status(200).json({
            success : true,
            message : "successfully login",
            data : checkExistingUser
            })
    } catch (error) {
        console.log(error)
    }
}

export default loginController;