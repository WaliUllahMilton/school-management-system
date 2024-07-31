import React, { useEffect, useState } from 'react'
import FormBody from '../../component/FormBody'
import Form from '../../component/Form'
import Input from '../../component/Input'
import NavLink from '../../component/NavLink'
import NavItem from '../../component/NavItem'
import Btn from '../../component/Btn'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { studentSignUpApi } from '../../slices/student/studentApi'
import { toast } from 'react-toastify'
export const StudentSignUp = () => {
    const data = useSelector((state)=>state.student);
    const dispatch = useDispatch();
    const navigate = useNavigate()
    const [formData,setFormData] = useState({
        name : "",
        email : "",
        username : "",
        whichClass : "",
        secretQuestion : "",
        password : ""
    })
    const toastSetting = {
        pauseOnHover: false,
          autoClose : 3000
    }
    const handleOnChange = (e)=>{
        const {name,value} = e.target;
        setFormData((prev)=>({
            ...prev,
            [name] : value
        }))
    }
    const handleSubmit = (e)=>{
        e.preventDefault();
        dispatch(studentSignUpApi(formData));
    }
    useEffect(()=>{
        if(data.success && data.success !== " "){
            toast.success(data.notification,toastSetting)
        }
        if(!data.success && data.success !== " "){
            toast.error(data.notification,toastSetting)
        }
    },[data?.success])
    console.log(data)
  return (
    <FormBody className="">
        <Form >
            <Input type="text" name="name" value={formData.name} onChange={(e)=>handleOnChange(e)} placeholder="Enter your Name"/>
            <Input type="email" name="email" value={formData.email} onChange={(e)=>handleOnChange(e)} placeholder="Enter your email address"/>
            <Input type="text" name="username" value={formData.username} onChange={(e)=>handleOnChange(e)} placeholder="Enter your username"/>
            <Input type="text" name="whichClass" value={formData.whichClass} onChange={(e)=>handleOnChange(e)} placeholder="Enter your username"/>
            <Input type="text" name="secretQuestion" value={formData.secretQuestion} onChange={(e)=>handleOnChange(e)}  placeholder="Enter a key for password recover"/>
            <Input type="text" name="password" value={formData.password} onChange={(e)=>handleOnChange(e)} placeholder="Enter password"/>
            <NavLink>
              <NavItem innerContent="login" to="/admin/login"/>
              <NavItem innerContent="forgot password ?" to="/admin/forgot-password"/>
            </NavLink>
            <Btn innerText="Sign Up" onClick={(e)=>handleSubmit(e)}/>
        </Form>
    </FormBody>
  )
}
