
import propTypes from 'prop-types'
 const Btn = ({className,onClick,innerText}) => {
  return (
    <div className={`${className} text-center capitalize mx-auto cursor-pointer text-base font-roboto font-bold bg-cyan-900 border-white  text-white border-2 px-14 py-2 rounded-md  hover:text-cyan-900 hover:border-cyan-900 hover:bg-white ease-in-out duration-300 transition-all transition-4`}
    onClick={onClick}>
        {innerText}
    </div>
  )
}

Btn.propTypes = {
    className : propTypes.string,
    onClick : propTypes.func,
    innerText : propTypes.string
};

export default Btn;