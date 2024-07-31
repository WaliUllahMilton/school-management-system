import PropTypes from 'prop-types'

const Form = ({onSubmit,children,className}) => {
  return (
    <div>
        <form onSubmit={onSubmit} 
        className={`${className} flex flex-col gap-6 min-w-[25vw] justify-center `}>
           {children}
            
        </form>
    </div>
  )
}


Form.propTypes = {
    onSubmit : PropTypes.func,
    className : PropTypes.string,
    children : PropTypes.node.isRequired
}


export default Form;
