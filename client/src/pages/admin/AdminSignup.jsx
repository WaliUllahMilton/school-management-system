import React from 'react'
import Btn from '../../component/Btn'

export const AdminSignup = () => {
    const handelSubmit = ()=>{

    }
  return (
    <secton className="min-h-screen  flex justify-center font-roboto items-center">
        <div className='p-10 min-w-[40vw] min-h-[70vh] border-2 bg-orange-600 rounded-lg'>
            <h3 className='text-center mb-4 text-xl font-bold  text-white'>Admin Login</h3>
            <form onSubmit={handelSubmit} 
                className='flex flex-col gap-6 '>
                <input type="text" 
                className='outline-none py-2 pl-2 text-base rounded-md'
                placeholder='name'/>
                <input type="text"  
                className='outline-none py-2 pl-2 text-base rounded-md'
                placeholder='username'/>
                <input type="email" 
                className='outline-none py-2 pl-2 text-base rounded-md'  placeholder='email'/>
                <input type="text"  
                className='outline-none py-2 pl-2 text-base rounded-md' placeholder='secret question'/>
                <input type="password" 
                className='outline-none py-2 pl-2 text-base rounded-md'  placeholder='password'/>
                <Btn innerText="Sign Up" className=""/>
            </form>
        </div>
    </secton>
  )
}
