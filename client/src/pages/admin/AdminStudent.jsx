import React, { useState } from 'react'
import NavLink from '../../component/NavLink'
import { IoSearch } from "react-icons/io5";
import { IoMdAdd } from "react-icons/io";
import { FaRegEdit } from "react-icons/fa";
import { RiDeleteBin5Line } from "react-icons/ri"
import Btn from '../../component/Btn';
import MyModal from '../../component/MyModal';
export const AdminStudent = () => {
  const [showModal,setShowModal] = useState(false)
  const [selectAll,setSelectAll] = useState(false)
  return (
    <section className='bg-white px-5 font-roboto rounded-md py-6'>
      {
        showModal ? <MyModal onClose={()=>{setShowModal(false)}} /> : ""
      }
        <div className='min-w-[70vw] '>
          <NavLink className="items-center">
            <div className='min-w-[138px] font-bold'>
              <h2 className=''>All Class List</h2>
            </div>
            <NavLink className="items-center">
              <div className='w-[245px] relative h-[34px] text-[#8A8D8E] '> 
                <span className='absolute cursor-pointer right-3 top-[50%] transform -translate-y-[50%]'>
                  <IoSearch/>
                </span>
                <input className='pl-3 pr-8 w-full h-full  border rounded-xl  outline-none' type="text" /></div>
                <span 
                onClick={()=>setShowModal(true)}
                className='ml-3 bg-[#FAE27C] cursor-pointer text-xl p-[5px] rounded-full'>
                  <IoMdAdd/>
                </span>
            </NavLink>
          </NavLink>
          </div>
          <div className='mt-9'>
            <NavLink className="py-5 px-4 rounded-l-md rounded-r-md text-lg border-b-2 bg-[#C3EBFA]" >
              <NavLink className='min-w-[15vw] justify-stretch gap-5'>
                <input 
                type="checkbox"
                 onChange={()=> setSelectAll(!selectAll)} 
                 value={selectAll}
                 className='min-h-5 min-w-4'  name=""/>
                <p>Name</p>
              </NavLink>
              <div className='min-w-[10vw] max-w-[10vw]'>
                <p>Student ID</p>
              </div>
              <div className='min-w-[10vw] max-w-[10vw]'>
                <p>Class</p>
              </div>
              <div className='min-w-[10vw] max-w-[10vw]'>
                <p>Parent's Phone</p>
              </div>
              <div className='min-w-[10vw] max-w-[10vw]'>
                <p>Address</p>
              </div>
              <div className='min-w-[10vw] max-w-[10vw]'>
                <p>Action</p>
              </div>
            </NavLink>
            {/* class resilt */}
            <NavLink className="py-5 px-4 items-center border-b-2 text-lg" >
            <NavLink className='min-w-[15vw] justify-stretch items-start gap-5'>
                <input type="checkbox" className='min-h-5 min-w-4' 
                value={selectAll}
                name="" id="" />
                <p>Milton</p>
              </NavLink>
              <div className='min-w-[10vw] max-w-[10vw]'>
                <p>1312424</p>
              </div>
              <div className='min-w-[10vw] max-w-[10vw]'>
                <p>10</p>
              </div>
              <div className='min-w-[10vw] max-w-[10vw]'>
                <p>01728326487</p>
              </div>
              <div className='min-w-[10vw] max-w-[10vw]'>
                <p>ahhamdjsn sjhdusah nsad</p>
              </div>
              <NavLink className='min-w-[10vw] text-xl text-[#8A8D8E] justify-stretch gap-3'>
                <span><FaRegEdit/></span>
                <span><RiDeleteBin5Line/></span>
              </NavLink>
            </NavLink>
          </div>
          <div className='mt-9'>
            <NavLink className="min-w-full justify-between">
              <Btn innerText="Previous" className="ml-0 mr-0 text-base text-[#242424] font-normal px-4 py-[5px] bg-transparent border-2 hover:border-[#8A8D8E] hover:text-[#242424] border-[#8A8D8E]"/>
              <p className='text-xl text-[#8A8D8E]'>Page 1 of 12</p>
              <Btn innerText="Next" className="ml-0 mr-0 text-base text-[#242424] font-normal px-4 py-[5px] bg-transparent border-2 hover:border-[#8A8D8E] hover:text-[#242424] border-[#8A8D8E]"/>
            </NavLink>
          </div>

        
    </section>
  )
}
