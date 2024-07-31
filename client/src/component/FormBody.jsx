
import PropTypes from 'prop-types'
const FormBody = ({className,headerClassName,headerText,children}) => {
  return (
    <secton className="min-h-screen  flex justify-center font-roboto items-center">
        <div className={`${className} border-animation flex flex-col jus p-10  bg-orange-600 rounded-lg`}>
            <h3 className={`${headerClassName} text-center mb-4 text-xl font-bold  text-white`}>{headerText}</h3>
           {children}
        </div>
    </secton>
  )
}
FormBody.propTypes = {
    className : PropTypes.string,
    headerClassName : PropTypes.string,
    headerText : PropTypes.string,
    children : PropTypes.node.isRequired
}

export default FormBody;
