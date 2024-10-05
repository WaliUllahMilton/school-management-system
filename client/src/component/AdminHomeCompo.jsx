import React, { useState } from 'react'
import Image from './Image'
import NavLink from './NavLink'
import PropTypes from 'prop-types'
export const AdminHomeCompo = ({icon,title,count}) => {
    const [hover,setHover] = useState(false)
  return (
        <div onMouseEnter={()=>setHover(true)}
            onMouseLeave={()=>setHover(false)}
        >
            <NavLink  className=" bg-slate-50 [&> .title]:text-red text-blue-500 cursor-pointer hover:bg-blue-500 second:text-red transition duration-300  hover:text-white px-5 rounded-md shadow-md items-center font-roboto border min-w-[16vw] max-w-[20vw]: py-3 max-h[120px] min-h-[120px]">
            <NavLink className='flex-col'>
            <h3 className='text-3xl font-sans font-bold'>{"$"+count}</h3>
            <h3 className={`capitalize text-base title ${hover ? "text-white" : " text-gray-600"} transform duration-300 font-bold`}>{title}</h3>
            </NavLink>
            <div className='text-4xl hover:text-white '>
            {icon}
            </div>
            
        </NavLink>
        </div>
  )
}
AdminHomeCompo.propTypes = {
    icon : PropTypes.node,
    title : PropTypes.string,
    count : PropTypes.string
}