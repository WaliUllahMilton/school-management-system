import { students } from "../../model/studentsModel.js";



 const registrationController = async(req,res)=>{
    const {username,password,whichClass} = req.body;
    try {
        if(!username || !password || !whichClass){
            return  res.status(400).json({
                    success : false,
                    message : "please fill all the field"
                    });
        }
        const checkExistingUser = await students.findOne({username : username})
        if(checkExistingUser){
            return res.status(401).json({
                success : false,
                message : "user allready exist"
            })
        }
        const data = await new students({
            username : username,
            password : password,
            whichClass : whichClass
        });
        data.save();
        if(data){
            return res.status(201).json({
                success : true,
                message : "successfully created",
                data : data
            })
        }
    } catch (error) {
        console.log(error)
    }
}
export default registrationController;