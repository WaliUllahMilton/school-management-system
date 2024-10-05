
import PropTypes from 'prop-types'
import { useEffect, useState } from 'react'
import { MdVisibility,MdVisibilityOff  } from "react-icons/md";
const Input = ({type,className,placeholder,onChange,value,name}) => {
  const [inputAnimate,setInputAnimate] = useState(false);
  const [inputVal,setInputVal] = useState(false); 
  const [passShow,setPassShow] = useState(false);
  const [inputType,setInputType] = useState(type);
  const handleFocusIn = ()=>{
    setInputAnimate(true)
  }
  const handleFocusOut = ()=>{
    setInputAnimate(false)
    setInputVal(value !== '')
  }

  useEffect(()=>{
    setInputVal(value !== '');
    if(passShow){
      setInputType("text")
    }else{
      setInputType(type)
    }
  }, [value,passShow]);

  return (
    <div className='relative min-w-[30vw] font-roboto'>
    <input type={inputType} 
    className={`${className} outline-none border-2 border-gray-300-100 w-full transition duration-200 focus:border-cyan-400 bg-white py-2 pl-5 focus:text-black text-base rounded-sm`}
    onChange={onChange}
    onFocus={handleFocusIn}
    onBlur={handleFocusOut}
    value={value}
    id={name}
    name={name}
    />
    <label htmlFor={name} className={`absolute ${inputAnimate || inputVal  ?  "bottom-[100%] px-1 text-sm text-cyan-400 bg-white" : "bottom-[50%]" }  left-5 text-gray-400 text-base capitalize transition duration-200 transform translate-y-[50%]`}>{placeholder+" *"}</label>
    { type == "password" &&
      <span onClick={()=>setPassShow(!passShow)} className='text-gray-400  text-lg font-bold absolute bottom-[50%] transform translate-y-[50%] right-5'>{
        passShow ? <MdVisibility/> : <MdVisibilityOff/>
      }</span>
    }
    </div>
  )
}
Input.propTypes = {
    type : PropTypes.string,
    className : PropTypes.string,
    placeholder : PropTypes.string,
    onChange : PropTypes.func,
    value : PropTypes.string,
    name : PropTypes.string
}

export default Input;

