
import PropTypes from 'prop-types'
const Input = ({type,className,placeholder,onChange,value,name}) => {
  return (
    <input type={`text ${type}`} 
    className={`${className} outline-none  py-2 pl-2 text-base rounded-md`}
    placeholder={placeholder}
    onChange={onChange}
    value={value}
    name={name}
    />
  )
}
Input.propTypes = {
    type : PropTypes.string,
    className : PropTypes.string,
    placeholder : PropTypes.placeholder,
    onChange : PropTypes.func,
    value : PropTypes.string,
    name : PropTypes.string
}

export default Input;

