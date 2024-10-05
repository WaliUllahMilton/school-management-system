import React from 'react'
import NavLink from './NavLink'
import PropTypes from 'prop-types'
import { useNavigate } from 'react-router-dom'

 const SelectRollCompo = ({logo,header,desc,to}) => {
  const navigate = useNavigate()
  return (
    <div onClick={()=>navigate(to)} className='bg-orange-50 hover:bg-cyan-900 hover:shadow-blue-300 hover:text-white ease-in-out duration-500 shadow-md shadow-slate-700 rounded-lg font-roboto pb-10 text-center max-w-[24vw] min-w-[24vw] min-h-[25vh] max-h-[30vh]  py-6 cursor-pointer capitalize px-4  '>
      <NavLink className=" flex-col justify-center items-center gap-4">
        <div className=''>{logo}</div>
        <div className='text-xl font-bold'>{header}</div>
        <div className='text-[13px] font-bold'>{desc}</div>
      </NavLink>
    </div>
  )
}

SelectRollCompo.proptypes = {
  logo : PropTypes.node.isRequired,
  header : PropTypes.string,
  desc :  PropTypes.string,
  to : PropTypes.string
}

export default SelectRollCompo;