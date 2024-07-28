import mongoose from "mongoose"
import { teachers } from "../../model/teachersModel.js"

export const getAllTeacher = async(req,res)=>{
    try {
        const allUser = await teachers.find({},"-_id -password -createdAt -updatedAt -secretKey -__v")
        if(!allUser || allUser.length === 0){
            return res.status(404).json({
                succes : false,
                message : "there are no teachers data"
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

export const getSingleTeacher = async (req,res)=>{
    const {id} = req.params;
    try {
        const objId =mongoose.Types.ObjectId.isValid(id)
        if(!id || !objId){
            return res.status(400).json({
                succes : false,
                message : "invalid search"
            })
        }
        const user = await teachers.findOne({_id :id},"-_id -password -createdAt -updatedAt -secretKey -__v")
        if(user){
            return res.status(200).json({
                succes : true,
                message : "teachers found successfully",
                data : user
            })
        }else{
            return res.status(200).json({
                succes : false,
                message : "teachers not found"
            })
        }
    } catch (error) {
        console.log(error)
    }
}