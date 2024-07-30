import PropTypes from 'prop-types'

const Form = ({onSubmit,children}) => {
  return (
    <div>
        <form onSubmit={onSubmit} 
        className='flex flex-col gap-6 '>
           {children}
            
        </form>
    </div>
  )
}


Form.propTypes = {
    onSubmit : PropTypes.func,
    children : PropTypes.node.isRequired
}


export default Form;
