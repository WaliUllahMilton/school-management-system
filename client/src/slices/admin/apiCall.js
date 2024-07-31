import { createAsyncThunk } from "@reduxjs/toolkit"
import axios from 'axios'
export const SignUpApi = createAsyncThunk("admin/signup",async({name,username,email,secretKey,password},{rejectWithValue})=>{
    try {
        const response =await axios.post('http://localhost:8080/admin-signup',{
            name,username,email,secretKey,password
        })
        console.log("response",response)
        return response.data
    } catch (error) {
        return rejectWithValue(error.response)
    }
})

export const signInApi = createAsyncThunk("admin/signin",async({email,password},{rejectWithValue})=>{
    try {
        const response = await axios.post('http://localhost:8080/admin-login',{
            email,password
        })
        console.log(response.data)
        return response.data
    } catch (error) {
        console.log(error)

        return rejectWithValue(error.response)
    }
})