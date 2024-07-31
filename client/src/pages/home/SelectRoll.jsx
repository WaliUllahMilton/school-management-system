import React from 'react'
import NavLink from '../../component/NavLink'
import SelectRollCompo from '../../component/SelectRollCompo'
import { FaUser } from "react-icons/fa6";
import { FaUserGraduate } from "react-icons/fa";
import { FaUserPen } from "react-icons/fa6";
export const SelectRoll = () => {
  return (
   <section className='min-h-screen bg-gradient-to-t from-blue-400 to-teal-500'>
         <div className='max-w-container  mx-auto py-10 '>
        <NavLink>
            <SelectRollCompo logo={<FaUser/>} to="/admin-login" header="Admin" desc="login or sign up as a admin to access the dashboar and manage the data"/>
            <SelectRollCompo logo={<FaUserGraduate/>} to="/student-login" header="Student" desc="login or sign up as a admin to access the dashboar and manage the data"/>
            <SelectRollCompo logo={<FaUserPen/>} to="teacher-login" header="Teacher" desc="login or sign up as a admin to access the dashboar and manage the data"/>
        </NavLink>
    </div>
   </section>
  )
}
