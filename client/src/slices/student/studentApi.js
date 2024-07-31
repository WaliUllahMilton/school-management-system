import { createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"


export const studentSignUpApi = createAsyncThunk("student/signup",async({name,username,email,secretQuestion,whichClass,password},{rejectWithValue})=>{
    try {
        const response = await axios.post("http://localhost:8080/student-signup",{
            name,username,email,whichClass,password,secretQuestion
        })
        console.log(response)
        return response.data
    } catch (error) {
        console.log(error)
        return rejectWithValue(error.response)
    }
})