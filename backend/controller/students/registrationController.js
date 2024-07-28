import { students } from "../../model/studentsModel.js";
import bcrypt from 'bcrypt'
import { config } from "dotenv";
config();
 const registrationController = async(req,res)=>{
    const {username,email,password,whichClass,secretQuestion} = req.body;
    try {
        if(!username || !email || !password || !whichClass || !secretQuestion){
            return  res.status(400).json({
                    success : false,
                    message : "please fill all the field"
                    });
        }
        if(!email.includes("@")){
            return res.status(401).json({
                success : false,
                message : "invalid email"
            })
        }
        const checkExistingUser = await students.findOne({email : email})
        if(checkExistingUser){
            return res.status(401).json({
                success : false,
                message : "user allready exist"
            })
        }
        const salt = Number(process.env.SALT_ROUND)
        const hashedPassword =await bcrypt.hash(password,salt);
        const user = await new students({
            username : username,
            email :email,
            password : hashedPassword,
            whichClass : whichClass,
            secretKey :secretQuestion
        });
        await user.save();
        user.password = undefined
        if(user){
            
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