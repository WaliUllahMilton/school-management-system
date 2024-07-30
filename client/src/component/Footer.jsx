import React from 'react'
import NavLink from './NavLink'
import NavItem from './NavItem'
export const Footer = () => {
  return (
    <section className='bg-[#1b1b1b] py-16'>
        <div className='max-w-container mx-auto font-roboto '>
       <NavLink className="">
            <NavLink className="min-w-[38vw]">
                <div className='max-w-[28vw]'>
                    <h3 className='text-xl text-[#c21818]
                    test-base font-bold mb-10'>School Management system</h3>
                    <p className='w-auto text-xs text-[#e4e4e4ab]'>
                    The School of Interdisciplinary Research (SIRe) was founded in October 2017 with the objective to create a platform for promoting research across different disciplines at IIT Delhi. It is envisioned that the school with its multi-disciplinary nature will not only accelerate its growth but would also enable to engage with faculty across other Institutes like AIIMS, JNU, NII etc. It is expected that over a period of time the School would be able to "seed" a number of interdisciplinary programs that do not exist toda
                    </p>
                    <div>logo social</div>
                </div>
                <NavLink className="flex-col gap-3 justify-stretch">
                    <h3 className='font-bold text-base text-[#e4e4e4]'>NAVIGATION</h3>
                    <NavItem className="text-[#e4e4e4ab] text-[13px]" innerText="About this institue"/>
                    <NavItem className="text-[#e4e4e4ab] text-[13px]" innerText="Adminstratot"/>
                    <NavItem className="text-[#e4e4e4ab] text-[13px]" innerText="News"/>
                </NavLink>
            </NavLink>
            <NavLink className="min-w-[30vw]">
                <NavLink className="flex-col gap-3 justify-stretch">
                    <h3 className='font-bold text-base text-[#e4e4e4]'>USEFUL LINKS</h3>
                    <NavItem className="text-[#e4e4e4ab] text-[13px]" innerText="About this institue"/>
                    <NavItem className="text-[#e4e4e4ab] text-[13px]" innerText="Adminstratot"/>
                    <NavItem className="text-[#e4e4e4ab] text-[13px]" innerText="News"/>
                </NavLink>
                <NavLink className="flex-col gap-3 justify-stretch">
                    <h3 className='font-bold text-base text-[#e4e4e4]'>CONTACT US</h3>
                    <NavItem className="text-[#e4e4e4ab] text-[13px]" innerText="About this institue"/>
                    <NavItem className="text-[#e4e4e4ab] text-[13px]" innerText="Adminstratot"/>
                    <NavItem className="text-[#e4e4e4ab] text-[13px]" innerText="News"/>
                </NavLink>
            </NavLink>
       </NavLink>
    </div>
    </section>
  )
}
