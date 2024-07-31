
import FormBody from '../../component/FormBody'
import Form from '../../component/Form'
import Input from '../../component/Input'
import Btn from '../../component/Btn'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { signInApi } from '../../slices/admin/apiCall'
import {toast} from 'react-toastify'
export const AdminLogin = () => {
  const data = useSelector((state)=>state.admins)
  const dispatch = useDispatch()
  const [formData,setFormData] = useState({
    email : "",
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
    dispatch(signInApi(formData))
  }
  console.log(data)
useEffect(()=>{
  if(data.success && data.success !== " "){
    toast.success(data.notification)
  }
  if(!data.success && data.success !== " "){
    toast.error(data.notification)
  }
},[data])
  return (
    <section>
      <FormBody headerText="Admin Login">
          <Form>
              <Input type="email"
               name="email"
                value={formData.email}
                onChange={(e)=>handleOnChange(e)}
                 placeholder="email"/>

              <Input type="password"
               name="password"
               value={formData.password}
               onChange={(e)=>handleOnChange(e)}
               placeholder="password"/>
              <Btn innerText="Login" onClick={(e)=>handleSubmit(e)}/>
          </Form>
      </FormBody>
    </section>
  )
}
