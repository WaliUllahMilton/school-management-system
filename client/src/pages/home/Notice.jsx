/* eslint-disable react/no-unescaped-entities */

import { NavLink } from 'react-router-dom'
import NavItem from '../../component/NavItem'

export const Notice = () => {
  return (
    <section className='py-20 max-w-container  min-h-screen max-h-screen mx-auto'>
        <div className="text-[#c21818] text-lg font-roboto font-bold ">
          <div className='text-center'>
            <NavLink>IMPORTANT <span className='text-gray-800'>ANNOUNCEMENTS</span></NavLink>
          </div>
          <NavItem className="block mt-4" innerContent="UG Admission 2024-2025"/>
          <NavItem className="block mt-4" innerContent={"Corrigendum for EOI for Extreme Cold Weather Clothing: The last date for issuing of EOI is extended till 10th June 2024 (Monday) and the last date for submission of filled ExNavItemression of Interest (EOI) is extended till 20th June 2024 (Thursday) by 05:00 PM."}/>
          <NavItem className="block mt-4" innerContent="DeNavItemartment of Management Studies launches 2 Year Executive MBA Program."/>
          <NavItem className="block mt-4" innerContent="UG Admission 2024-2025"/>
          <NavItem className="block mt-4" innerContent={"Corrigendum for EOI for Extreme Cold Weather Clothing: The last date for issuing of EOI is extended till 10th June 2024 (Monday) and the last date for submission of filled ExNavItemression of Interest (EOI) is extended till 20th June 2024 (Thursday) by 05:00 PM."}/>
          <NavItem className="block mt-4" innerContent="DeNavItemartment of Management Studies launches 2 Year Executive MBA Program."/>
        </div>
    </section>
  )
}
