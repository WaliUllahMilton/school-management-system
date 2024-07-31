
import { useEffect, useState } from 'react'
import Btn from '../../component/Btn'
import Form from '../../component/Form'
import FormBody from '../../component/FormBody'
import Input from '../../component/Input'
import {useDispatch, useSelector } from 'react-redux'
import { SignUpApi } from '../../slices/admin/apiCall'
import {toast} from 'react-toastify'
import { useNavigate } from 'react-router-dom'

export const AdminSignup = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const data = useSelector((state)=> state.admins)
  const [formData,setFormData] =useState({
    name : "",
    username : "",
    email : "",
    secretKey : "",
    password : ""
  })
  
  const handleOnChange = (e)=>{
    const {name,value} = e.target
    setFormData((prev)=>({
      ...prev,
      [name] : value
    }))

  }
const handleSubmit = (e)=>{
  e.preventDefault();
  dispatch(SignUpApi(formData))
}
useEffect(() => {
  if (data.success !== undefined) {
    if (data.success && data.success !== " ") {
      console.log(data);
      toast.success(data.notification,{
        pauseOnHover: false,
        autoClose : 3000
      });
      navigate("/")
    }
    if(!data.success && data.success !== " "){
      toast.error(data.notification,{
        pauseOnHover: false,
        autoClose : 3000
      });
    }
  }
}, [data,navigate]);

  return (
    <FormBody className="">
        <Form onSubmit={(e)=>handleSubmit(e)}>
            <Input type="text" name="name" value={formData.name} onChange={(e)=>handleOnChange(e)} placeholder="Enter your Name"/>
            <Input type="email" name="email" value={formData.email} onChange={(e)=>handleOnChange(e)} placeholder="Enter your email address"/>
            <Input type="text" name="username" value={formData.username} onChange={(e)=>handleOnChange(e)} placeholder="Enter your username"/>
            <Input type="text" name="secretKey" value={formData.secretKey} onChange={(e)=>handleOnChange(e)}  placeholder="Enter a key for password recover"/>
            <Input type="text" name="password" value={formData.password} onChange={(e)=>handleOnChange(e)} placeholder="Enter password"/>
            <Btn innerText="Sign Up" onClick={handleSubmit}/>
        </Form>
    </FormBody>
  )
}


