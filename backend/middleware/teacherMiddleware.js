import mongoose from "mongoose";
import { teachers } from "../model/teachersModel";

export const isTeacherMiddleware = async(req,res,next)=>{
        const {id} = req.body;
        try {
            const checkId = mongoose.Types.ObjectId.isValid(id)
            if(!id || !checkId){
                return res.status(400).json({
                    success : false,
                    message : "invalid request"
                })
            }
            const checkTeacher = await teachers.findOne({_id : id});
            if(!checkTeacher || checkTeacher == null){
                return res.status(404).json({
                    success : false,
                    message : "unAuthenticate"
                })
            }else if(checkTeacher.role === "teacher"){
                    next();
            }else{
                return res.status(404).json({
                    success : false,
                    message : "unAuthenticate"
                })
            }
        } catch (error) {
            console.log(error)
        }
    }