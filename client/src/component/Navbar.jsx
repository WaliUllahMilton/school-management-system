
import NavLink from './NavLink'
import NavItem from './NavItem'
import { IoMenu } from "react-icons/io5";
import { FaHome } from "react-icons/fa";
import { MdOutlineClass } from "react-icons/md"
import { MdOutlineTopic } from "react-icons/md";
import { FaChalkboardTeacher } from "react-icons/fa"
import { FaUserGraduate } from "react-icons/fa";
import { BsBookmarks } from "react-icons/bs";
import { FaCircleExclamation } from "react-icons/fa6";
import { FaArrowLeft } from "react-icons/fa6";


// //
// import { CgProfile } from "react-icons/cg";
// import { IoLogOutOutline } from "react-icons/io5";
// import NavItem from './NavItem';
import { useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
// import { Home } from '../pages/home/Home';

 const Navbar = () => {
  let location = useLocation()
  let path = location.pathname.split("/");
  path = path[path.length-1]
  const[menu,setMentu] =useState(false)
  return (
    <section>
      <div className='  font-roboto min-h-full'>
        <div className={`bg-blue-500 ${menu ? 'ml-[199px]' : "ml-0"} transform transition-all duration-200 px-8 py-4 fixed z-40 top-0 left-0 right-0`}>
        <NavLink className="text-[2.5vh] max-w-screen text-white font-bold  "> 
            <NavLink className="items-center gap-8">
              <div className={`text-xl ${menu ? "hidden" : "block"}`}>
                <span
                onClick={()=>setMentu(!menu)}><IoMenu/></span>
              </div>
              <span>
                Admin Dashboard
              </span>
            </NavLink>
            <div>
              img
            </div>
        </NavLink>
        <p className='min-h-[2px] bg-red-600  blur-xl min-w-full absolute z-50 top-[53px] left-0'></p>
        </div>
        <NavLink className="justify-stretch min-w-screen">
        <div className={`fixed  ${menu ? 'min-w-[200Px]' : 'min-w-[84px]' } transition ease-in-out duration-500 bg-white   border-r-[1px] border-gray-50 min-h-screen`}>
          <div>
          <p className={`absolute text-gray-600 text-lg top-5 ${menu? "right-5" : "-left-5"} transform transition-all ease-in-out duration-500`}
          onClick={()=>setMentu(!menu)}
          ><FaArrowLeft/></p>
          </div>
        <NavLink className={`flex-col gap-2 px-2 py-6 border-t ${menu ? "border-opacity-35" : "border-opacity-0"} border-gray-600 mt-[54px] justify-between  text-gray-600`}>
                  <NavItem to="home"  
                    className={path=="home" && "bg-slate-100 text-blue-500"}
                   innerContent={
                   <>
                      <span className='text-xl'><FaHome/>
                      </span>
                      {menu && <span className='text-sm'>Home</span>}
                   </>}
                   />
                  <NavItem to="class"  
                    className={path=="class" && "bg-slate-100 text-blue-500"}
                   innerContent={
                   <>
                      <span className='text-xl'><MdOutlineClass/>
                      </span>
                      {menu && <span className='text-sm'>Class</span>}
                   </>}
                   />
                  <NavItem to="subject"  
                    className={path=="subject" && "bg-slate-100 text-blue-500"}
                   innerContent={
                   <>
                      <span className='text-xl'><MdOutlineTopic/>
                      </span>
                      {menu && <span className='text-sm'>Subject</span>}
                   </>}
                   />
                  <NavItem to="teacher"  
                    className={path=="teacher" && "bg-slate-100 text-blue-500"}
                   innerContent={
                   <>
                      <span className='text-xl'><FaChalkboardTeacher/>
                      </span>
                      {menu && <span className='text-sm'>Teacher</span>}
                   </>}
                   />
                  <NavItem to="student"  
                    className={path=="student" && "bg-slate-100 text-blue-500"}
                   innerContent={
                   <>
                      <span className='text-xl'><FaUserGraduate/>
                      </span>
                      {menu && <span className='text-sm'>Student</span>}
                   </>}
                   />
                  <NavItem to="notice"  
                    className={path=="notice" && "bg-slate-100 text-blue-500"}
                   innerContent={
                   <>
                      <span className='text-xl'><BsBookmarks/>
                      </span>
                      {menu && <span className='text-sm'>Notice</span>}
                   </>}
                   />
                  <NavItem to="complaints"  
                    className={path=="complaints" && "bg-slate-100 text-blue-500"}
                   innerContent={
                   <>
                      <span className='text-xl'><FaCircleExclamation/>
                      </span>
                      {menu && <span className='text-sm'>Complaints</span>}
                   </>}
                   />
        </NavLink>
        </div>
        <div className='py-[13vh] ml-20 bg-slate-100 min-h-full  w-full flex justify-center '>
          <Outlet/>
        </div>
        </NavLink>
    </div>
    </section>
  )
}
export default Navbar
