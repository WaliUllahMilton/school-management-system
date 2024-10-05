import React from 'react'
import NavLink from '../../component/NavLink'
import { Link } from 'react-router-dom'
import Btn from '../../component/Btn'
import  Image  from '../../component/Image'
import imgLink from '../../assets/home.png'
import { useNavigate } from 'react-router-dom'
export const Home = () => {
    const navigate = useNavigate()
  return (
    <section className='max-w-container py-20 mx-auto font-roboto'>
        <NavLink className="justify-between gap-4">
            <div>
                <Image src={imgLink} />
            </div>
            <div>
                <NavLink className="flex-col   justify-between min-h-[480px]">
                <h1 className="text-[36px]  font-[800] leading-10">Welcome to <br/>school management <br/>system</h1>
                    <p className='text-base'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Autem harum eligendi quisquam adipisci, voluptas labore fuga alias et magnam beatae! Sit praesentium ex voluptatem iste ducimus et ipsa odit qui.</p>
                    <NavLink className="flex-col gap-4">
                        <Btn onClick={()=>navigate("/select-roll")} innerText="login"/>
                        <Btn onClick={()=>navigate("/select-roll")}  innerText="login as guest" className="bg-teal-700 text-white hover:border-cyan-90 hover:text-teal-700 mb-10"/>
                    <p onClick={()=>navigate("/select-roll")}  className='text-center text-base cursor-pointer'>Don't have an account?<Link to=""> Sign up</Link></p>
                    </NavLink>
                </NavLink>
            </div>
        </NavLink>
    </section>
  )
}
