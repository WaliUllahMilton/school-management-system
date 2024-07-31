import PropTypes from 'prop-types'
 const NavLink = ({children,className}) => {
  return (
    <ul className={`${className} font-roboto flex max-w-container  justify-between`}>
      {children}
    </ul>
  )
}
NavLink.propTypes = {
  children : PropTypes.node.isRequired,
  className : PropTypes.string
}

export default NavLink
