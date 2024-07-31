import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
 const NavItem = ({innerContent,className,to}) => {
  return (
    <Link className={`${className} capitalize`} to={to}>
      {innerContent}
    </Link>
  )
}
NavItem.propTypes = {
  className : PropTypes.string,
  innerContent : PropTypes.node.isRequired,
  to : PropTypes.string
}
export default NavItem;