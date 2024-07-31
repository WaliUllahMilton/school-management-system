import React from 'react'
import NavLink from '../../component/NavLink'
import NavItem from '../../component/NavItem'

export const StudentResult = () => {
  return (
    <section className=' '>
        <div className='flex h-[calc(100vh-48px)] w-screen overflow-auto justify-center items-center '> 
            <div className='min-w-[60vw]  min-h-[70vh] block border-2'>
            <NavLink className=" px-3 py-3 text-lg font-bold border-b-2 text-center justify-between">
                <NavItem className="max-w-[20vw] min-w-[20vw]" innerContent="Subject"/>
                <NavItem
                className="max-w-[20vw] min-w-[20vw]" 
                innerContent="marks"/>
                <NavItem 
                className="max-w-[20vw] min-w-[20vw]" 
                innerContent="exam name"/>
            </NavLink>
           <NavLink className='px-3 min-h-6 items-center justify-around text-start border-b-2 border-dotted'>
               <div className='max-w-[20vw] min-w-[20vw] text-center'>
                   <p>bangla 1st paper</p>
               </div>
               <div className='max-w-[20vw] min-w-[20vw] text-center'>
                   <p>100</p>
               </div>
               <div className='max-w-[20vw] min-w-[20vw] text-center'>
                   <p>semester finel</p>
               </div>
            </NavLink>
           <NavLink className='px-3 min-h-6  justify-around text-start border-b-2 border-dotted'>
               <div className='max-w-[20vw] min-w-[20vw] text-center'>
                   <p>bangla 1st cknc</p>
               </div>
               <div className='max-w-[20vw] min-w-[20vw] text-center'>
                   <p>100</p>
               </div>
               <div className='max-w-[20vw] min-w-[20vw] text-center'>
                   <p>semester fizxznel</p>
               </div>
            </NavLink>
           <NavLink className='px-3 min-h-6  justify-around text-start border-b-2 border-dotted'>
               <div className='max-w-[20vw] min-w-[20vw] text-center'>
                   <p>bangla 1st cknc</p>
               </div>
               <div className='max-w-[20vw] min-w-[20vw] text-center'>
                   <p>100</p>
               </div>
               <div className='max-w-[20vw] min-w-[20vw] text-center'>
                   <p>2024 mid term exam</p>
               </div>
            </NavLink>
           <NavLink className='px-3 min-h-6  justify-around text-start border-b-2 border-dotted'>
               <div className='max-w-[20vw] min-w-[20vw] text-center'>
                   <p>bangla 1st cknc</p>
               </div>
               <div className='max-w-[20vw] min-w-[20vw] text-center'>
                   <p>100</p>
               </div>
               <div className='max-w-[20vw] min-w-[20vw] text-center'>
                   <p>semester fizxznel</p>
               </div>
            </NavLink>

            </div>
        </div>
    </section>
  )
}

