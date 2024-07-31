
import FormBody from '../../component/FormBody'
import Form from '../../component/Form'
import Input from '../../component/Input'
import Btn from '../../component/Btn'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { signInApi } from '../../slices/admin/apiCall'
import {toast} from 'react-toastify'
import { useNavigate } from 'react-router-dom'
import NavItem from '../../component/NavItem'
import NavLink from '../../component/NavLink'
import { CheckBox } from '../../component/CheckBox'
import CoverImg from '../../assets/adminLogin.png'
import Pic from '../../component/Image'
export const AdminLogin = () => {
  const data = useSelector((state)=>state.admin)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [formData,setFormData] = useState({
    email : "",
    password : "",
    checkBox : false
  })
  const handleOnChange = (e)=>{
    const {name,value} = e.target
    setFormData((prev)=>({
      ...prev,
      [name] : value
    }))
  }
  const handleChecked = (e)=>{
    const {name,checked} = e.target
    setFormData((prev)=>({
      ...prev,
      [name] : checked
    }))
  }
  const handleSubmit = (e)=>{
    e.preventDefault();
    dispatch(signInApi(formData))
  }
  console.log(formData)
useEffect(()=>{
  if(data?.success && data?.success !== " "){
    toast.success(data?.notification)
    navigate("/admin/dashboard")
  }
  if(!data?.success && data?.success !== " "){
    toast.error(data?.notification)
  }
},[data])
  return (
    <section className='bg-gradient-to-t from-blue-400 to-teal-500 min-h-screen'>
      <NavLink className="">
        <div className='min-w-[40vw] '>
        <FormBody headerText="Admin Login" title="wellcome back to your school admin ">
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
               <CheckBox value={formData.checkBox} name="checkBox" onChange={(e)=>handleChecked(e)}/>
              <Btn innerText="Login" className="w-full" onClick={(e)=>handleSubmit(e)}/>
              <NavLink className="text-black text-base">
                <NavItem to="/admin/signup" innerContent="create account"/>
                <NavItem innerContent="forgot password ?"/>
              </NavLink>
          </Form>
      </FormBody>
        </div>
        <div className='min-w-[60vw] bg-gray-100'>
            <Pic src={CoverImg}/>
        </div>
      </NavLink>
    </section>
  )
}
