import React from 'react'
import NavLink from '../../component/NavLink'
export const Contact = () => {
  return (
    <section className='py-20 mt-20 max-w-container mx-auto font-roboto text-base'>
        <h1 className='text-xl font-bold mb-10'>Contact Us</h1>
        <NavLink>
            <NavLink className="max-w-[25vw]">
                <div>logo</div>
                <div>
                <h2 className='font-bold'>Address</h2>
                <p className='text-gray-500'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, vitae?</p>
                </div>
            </NavLink>
            <NavLink className="max-w-[25vw]">
                <div>logo</div>
                <div>
                <h2 className='font-bold'>Phone</h2>
                <p className='text-gray-500'>+880 16999</p>
                </div>
            </NavLink>
            <NavLink className="max-w-[25vw]">
                <div>logo</div>
                <div>
                <h2 className='font-bold'>Email</h2>
                <p className='text-gray-500'>school@school.com</p>
                </div>
            </NavLink>
        </NavLink>
        <div>
        <iframe
            width="600"
            height="450"
            style={{ border: '0' }} 
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
            src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyBLIvJNMr079lL24i68P-W9AX4Qu1FePgQ&q=Space+Needle,Seattle+WA`}>
        </iframe>
        </div>
    </section>
  )
}
