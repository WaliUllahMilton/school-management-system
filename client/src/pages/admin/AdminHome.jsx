import React from 'react'
import NavLink from '../../component/NavLink'
import { AdminHomeCompo } from '../../component/AdminHomeCompo'
import { FaUserGraduate } from "react-icons/fa";
import { FaChalkboardTeacher } from "react-icons/fa"
import { FaDollarSign } from "react-icons/fa";
import { StudentAreaChart } from '../../component/StudentAreaChart';
import { EarningChart } from '../../component/EarningChart';
export const AdminHome = () => {
 
  return (
    <section className='max-h-full'>
        <NavLink className="flex-col gap-10 justify-stretch items-stretch">
        <NavLink className="gap-6">
            <AdminHomeCompo icon={<FaUserGraduate/>} title="students" count="20"/>
            <AdminHomeCompo icon={<FaUserGraduate/>} title="students" count="20"/>
            <AdminHomeCompo icon={<FaChalkboardTeacher/>} title="teachers" count="3"/>
            <AdminHomeCompo icon={<FaDollarSign/>} title="earnings" count="2489"/>
        </NavLink>
        <div className='h-[300px] pr-4 py-4 bg-white rounded-md shadow-lg w-full'>
        <StudentAreaChart/>
        </div>
        <div className='w-[475px] shadow-lg h-[300px] rounded-md py-4 px-4 bg-white'>
          <EarningChart/>
        </div>
        </NavLink>
    </section>
  )
}