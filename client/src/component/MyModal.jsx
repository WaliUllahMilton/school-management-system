import React, { useState } from 'react'
import Input from './Input'
import Btn from './Btn'
import { IoClose } from 'react-icons/io5'
const MyModal = ({onClose}) => {
    const[addClass,setAddClass]=useState("")
    console.log(addClass)
    const handleSubmit = ()=>{
        // const res = axios.post
    }
  return (
    <div>
      <div className={ `max-w-[40vw] rounded-md shadow-md px-10 py-20 bg-white absolute top-[50%] transform -translate-y-[50%] left-[50%]
      -translate-x-[50%]`}>
          <span className='cursor-pointer absolute top-3 right-2' onClick={onClose}><IoClose/></span>
          <Input type="text" name={addClass} value={addClass} onChange={(e)=>setAddClass(e.target.value)} placeholder="add class" className="mb-4"/>
          <Btn onClick={handleSubmit} innerText="Add Class"/>
      </div>
    </div>
  )
}
export default MyModal
