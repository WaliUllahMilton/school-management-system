import mongoose from "mongoose";
import { admin } from "../model/adminModel.js";

export const isAdminMiddleware = async(req,res,next)=>{
        const {id} = req.body;
        try {
            const checkId = mongoose.Types.ObjectId.isValid(id)
            if(!id || !checkId){
                return res.status(400).json({
                    success : false,
                    message : "invalid request"
                })
            }
            const checkAdmin = await admin.findOne({_id : id});
            if(!checkAdmin || checkAdmin == null){
                return res.status(404).json({
                    success : false,
                    message : "unAuthenticate"
                })
            }else if(checkAdmin.role === "admin"){
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