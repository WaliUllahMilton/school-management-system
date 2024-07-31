import { createSlice } from "@reduxjs/toolkit";
import { signInApi, SignUpApi } from "./apiCall";

const initialState = {
    id : null,
    name : null,
    email : null,
    isLoading : true,
    isError : false,
    success : " ",
    notification : ""
}



const adminSlice = createSlice({
    name : "admin",
    initialState,
    extraReducers : (builder)=>{
        builder.addCase(SignUpApi.pending,(state)=>{
            state.isLoading = true;
        }).addCase(SignUpApi.fulfilled,(state,action)=>{
            state.id =action.payload?.data._id
            state.name =action.payload?.data.name
            state.success = action.payload?.success
            state.isLoading = false,
            state.isError = false,
            state.notification = action?.payload?.message
            localStorage.setItem("admin",JSON.stringify({
                id : action?.payload?.data?._id,
                name : action?.payload?.data?.name,
                email : action?.payload?.data?.email
            }))
        }).addCase(SignUpApi.rejected,(state,action)=>{
            state.id = null,
            state.name = null,
            state.email = null,
            state.isLoading = false,
            state.isError = action.payload?.data?.error,
            state.success= action.payload?.data.success
            state.notification= action.payload?.data.message
        }).addCase(signInApi.pending,(state)=>{
            state.isLoading = true
        }).addCase(signInApi.fulfilled,(state,action)=>{
            state.id =action.payload?.data._id
            state.name =action.payload?.data.name
            state.success = action.payload?.success
            state.isLoading = false,
            state.isError = false,
            state.notification = action?.payload?.message,
            localStorage.setItem("admin",JSON.stringify({
                id : action?.payload?.data?._id,
                name : action?.payload?.data?.name,
                email : action?.payload?.data?.email
            }))
        }).addCase(signInApi.rejected,(state,action)=>{
            state.id = null,
            state.name = null,
            state.email = null,
            state.isLoading = false,
            state.isError = action.payload?.data?.error,
            state.success= action.payload?.data.success
            state.notification= action.payload?.data.message
        })
    }
})
const {} = adminSlice.actions;
export default adminSlice.reducer;