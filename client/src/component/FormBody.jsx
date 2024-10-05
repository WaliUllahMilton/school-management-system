
import PropTypes from 'prop-types'
import NavLink from './NavLink';
const FormBody = ({className,headerClassName,headerText,children,title}) => {
  return (
    <section className="flex justify-center min-h-screen  bg-white font-roboto items-center">
        <div className={`${className} flex flex-col  gap-4 px-10`}>
            <NavLink className="flex-col">
            <h3 className={`${headerClassName} text-center mb-4 text-xl font-bold  text-gray-800`}>{headerText}</h3>
            <p className='text-center'>{title}</p>
            </NavLink>
           {children}
        </div>
    </section>
  )
}
FormBody.propTypes = {
    className : PropTypes.string,
    headerClassName : PropTypes.string,
    headerText : PropTypes.string,
    children : PropTypes.node.isRequired,
    title : PropTypes.string
}

export default FormBody;
