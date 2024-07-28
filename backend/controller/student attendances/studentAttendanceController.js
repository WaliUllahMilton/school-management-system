import { studentAttendances } from "../../model/studentAttendanceModel.js";


export  const studentAttendance = async(req,res)=>{
            const {studentId,subject} = req.body;
            try {
                if(!studentId ||  !subject){
                    return res.status(400).json({
                        success : false,
                        message : "all input are need"
                    })
                }
                const giveAttendance = new studentAttendances({
                    student : studentId,
                    
                    subject : subject
                })
                await giveAttendance.save();
                if(giveAttendance){
                    return res.status(201).json({
                        success : true,
                        message : "Successfulle given attendance"
                    })
                }
                return res.status(400).json({
                    success : false,
                    message : "something went wrong"
                })
                
            } catch (error) {
                console.log(error);
            }
        }


export  const studentAttendanceUbdate = async(req,res)=>{
            const {attendance,subject,id} = req.body;
            try {
                if(!attendance ||  !subject|| !id){
                    return res.status(400).json({
                        success : false,
                        message : "all input are need"
                    })
                }
                const checkExisting = await studentAttendances.findOne({_id : id})
                if(!checkExisting){
                    return res.status(404).json({
                        success : false,
                        message : "somethin wrong"
                    })
                }

                const update = await studentAttendances.findByIdAndUpdate({_id :id},{
                        attendance : attendance,
                        subject : subject
                })
                await update.save();
                if(update){
                    return res.status(201).json({
                        success : true,
                        message : "Successfulle updated"
                    })
                }
                return res.status(400).json({
                    success : false,
                    message : "something went wrong"
                })
                
            } catch (error) {
                console.log(error);
            }
        }