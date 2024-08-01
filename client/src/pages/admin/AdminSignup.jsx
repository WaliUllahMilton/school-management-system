
import { useEffect, useState } from 'react'
import Btn from '../../component/Btn'
import Form from '../../component/Form'
import FormBody from '../../component/FormBody'
import Input from '../../component/Input'
import {useDispatch, useSelector } from 'react-redux'
import { SignUpApi } from '../../slices/admin/apiCall'
import {toast} from 'react-toastify'
import { useNavigate } from 'react-router-dom'
import NavLink from '../../component/NavLink'
import NavItem from '../../component/NavItem'
import { CheckBox } from '../../component/CheckBox'
import CoverImg from '../../assets/adminLogin.png'
import Pic from '../../component/Image'
import { FcIdea } from "react-icons/fc"
export const AdminSignup = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const data = useSelector((state)=> state.admin)
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
  const handleChecked = (e)=>{
    const {name,checked}=e.target;
    setFormData((prev)=>({
      ...prev,
      [name] :checked
    }))
  }
const handleSubmit = (e)=>{
  e.preventDefault();
  dispatch(SignUpApi(formData))
}
console.log(data)
useEffect(() => {
  if (data?.success !== undefined) {
    if (data?.success && data?.success !== " ") {
      console.log(data);
      toast.success(data?.notification,{
        pauseOnHover : false,
        autoClose : 3000
      });
      navigate("/admin-dashboard")
    }
    if(!data?.success && data?.success !== " "){
      toast.error(data?.notification,{
        pauseOnHover : false,
        autoClose : 3000
      });
    }
  }
}, [data]);

  return (
    <section className=''>
    <NavLink >
      <div className='min-w-[40vw] max-h-screen min-h-screen'>
      <FormBody className="max-h-screen" headerText="Admin Login" title="wellcome back to your school admin ">
        <Form>
            <Input type="text"
             name="name"
              value={formData.name}
              onChange={(e)=>handleOnChange(e)}
               placeholder="name"/>
            <Input type="text"
             name="username"
              value={formData.username}
              onChange={(e)=>handleOnChange(e)}
               placeholder="username"/>
            <Input type="text"
             name="secretKey"
              value={formData.secretKey}
              onChange={(e)=>handleOnChange(e)}
               placeholder="secret Key"/>
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

             <CheckBox value={formData.checkBox} name="checkBox" onChange={(e)=>handleChecked(e)}/>
            <Btn innerText="Sign up" className="w-full" onClick={handleSubmit}/>
            <NavLink className="text-black text-base">
              <NavItem to="/admin-login" innerContent="all reeady have an account ?"/>
              <NavItem innerContent="forgot password ?"/>
            </NavLink>
        </Form>
    </FormBody>
      </div>
      <div className='min-w-[60vw] relative overflow-hidden max-h-screen bg-gray-100'>
          <span className='text-[60px] absolute right-[10vw] top-[7vw] text-white   '>
            <FcIdea className=' ' />
          </span>
          <Pic src={CoverImg}/>
      </div>
    </NavLink>
  </section>
  )
}


