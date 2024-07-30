/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom'
 const NavItem = ({innerText,className,to}) => {
  return (
    <Link className={`${className}`} to={to}>
      {innerText}
    </Link>
  )
}
export default NavItem;