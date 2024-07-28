import mongoose from "mongoose"
import { students } from "../../model/studentsModel.js"

export const getAllStudent = async(req,res)=>{
    try {
        const allUser = await students.find({},"-_id -password -createdAt -updatedAt -secretKey -__v")
        if(!allUser || allUser.length === 0){
            return res.status(404).json({
                succes : false,
                message : "there are no students data"
            })
        }else{
            return res.status(200).json({
                succes : true,
                message : "successfully found all data",
                data : allUser
            })
        }
    } catch (error) {
        console.log(error)
    }
}

export const getSingleStudent = async (req,res)=>{
    const {id} = req.params;
    try {
        const objId =mongoose.Types.ObjectId.isValid(id)
        if(!id || !objId){
            return res.status(400).json({
                succes : false,
                message : "invalid search"
            })
        }
        const user = await students.findOne({_id :id},"-_id -password -createdAt -updatedAt -secretKey -__v")
        if(user){
            return res.status(200).json({
                succes : true,
                message : "Student found successfully",
                data : user
            })
        }else{
            return res.status(200).json({
                succes : false,
                message : "student not found"
            })
        }
    } catch (error) {
        console.log(error)
    }
}