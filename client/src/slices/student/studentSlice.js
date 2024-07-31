import { createSlice } from "@reduxjs/toolkit"
import { studentSignUpApi } from "./studentApi";


const initialState = {
    id : null,
    name : null,
    email : null,
    whichClass : null,
    isLoading : null,
    isError : false,
    success : " ",
    notification : ""
}


const studentSlice = createSlice({
    name : "student",
    initialState,
    extraReducers : (builder) =>(
        builder.addCase(studentSignUpApi.pending,(state)=>{
            state.isLoading = true
        }).addCase(studentSignUpApi.fulfilled,(state,action)=>{
            state.id = action?.payload?.data?._id
            state.name = action?.payload?.data?.name
            state.email = action?.payload?.data?.email
            state.isLoading = false
            state.isError = false 
            state.success = true
            state.notification = action?.payload?.data?.message
        }).addCase(studentSignUpApi.rejected,(state,action)=>{
            state.isError = true
            state.isLoading = false
            state.success = false
            state.notification = action?.payload?.data?.message
        })
    )
})

export default studentSlice.reducer;