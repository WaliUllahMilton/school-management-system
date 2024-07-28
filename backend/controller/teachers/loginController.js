
import bcrypt from 'bcrypt';
import { teachers } from "../../model/teachersModel.js";

const loginController = async(req,res)=>{
    const {username,password} = req.body;
    try {
        if(!username || ! password){
            return res.status(400).json({
                success : false,
                message : "username and password required"
            });
        }
        const user = await teachers.findOne({username : username})
        if(!user){
            return res.status(400).json({
                success :false,
                message : "please sign up first"
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