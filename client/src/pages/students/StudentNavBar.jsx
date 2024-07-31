import React from 'react'
import NavLink from '../../component/NavLink'
import NavItem from '../../component/NavItem'
import { Outlet } from 'react-router-dom'

export const StudentNavbar = () => {
  return (
    <section>
        <nav className='bg-rose-400 py-3'>
        <div className='max-w-container mx-auto'>
        <NavLink className="">
            <NavItem to="result" innerContent="Result" className="text-white font-bold"/>
            <NavItem to="attendance" innerContent="attendance"/>
            <NavItem to="routine" innerContent="routin"/>
            <NavItem innerContent="log out"/>
        </NavLink>
    </div>
    </nav>
    <Outlet/>
    </section>
  )
}
