import bcrypt from 'bcrypt'
import { config } from "dotenv";
import { admin } from '../../model/adminModel.js';
config();
 const registrationController = async(req,res)=>{
    const {name,username,email,password,secretKey} = req.body;
    try {
        if(!username || !name || !email || !password || !secretKey){
            return  res.status(400).json({
                    success : false,
                    message : "please fill all the field"
                    });
        }
        // console.log(typeof username);
        const checkExistingUser = await admin.findOne({email})
        if(checkExistingUser  ){
            return res.status(401).json({
                success : false,
                message : "this email id allready have an account please login",
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
            name : name,
            username : username,
            email :email,
            password : hashedPassword,
            secretKey : secretKey,
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