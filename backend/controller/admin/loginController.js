import { admin } from "../../model/adminModel.js";
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
        const user = await admin.findOne({email : email})
        if(!user){
            return res.status(400).json({
                success :false,
                message : "wrong email address"
            });
        }
        const comparePassword =await bcrypt.compare(password,user.password)
        if(!comparePassword){
            return res.status(400).json({
                success :false,
                message : "wrong password"
            });
        }
        user.password = undefined ;
        return  res.status(200).json({
            success : true,
            message : "successfully login",
            data : user
            })
    } catch (error) {
        console.log(error)
    }
}

export default loginController;