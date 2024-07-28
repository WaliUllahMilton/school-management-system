import bcrypt from 'bcrypt'
import { config } from "dotenv";
import { teachers } from '../../model/teachersModel.js';
config();
 const registrationController = async(req,res)=>{
    const {username,email,password,secretQuestion} = req.body;
    try {
        if(!username || !email || !password || !secretQuestion ){
            return  res.status(400).json({
                    success : false,
                    message : "please fill all the field"
                    });
        }
        const checkExistingUser = await teachers.findOne({email : email})
        if(checkExistingUser){
            return res.status(401).json({
                success : false,
                message : "user allready exist"
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
        const user = await new teachers({
            username : username,
            email :email,
            password : hashedPassword,
            secretKey :secretQuestion
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