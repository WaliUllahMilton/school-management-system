import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
 const NavItem = ({innerContent,className,to}) => {
  return (
    <Link className={`${className} capitalize flex px-8 py-2 hover:text-blue-500 rounded-sm hover:bg-slate-100 transition duration-300 min-h-[36px]  items-center gap-8 overflow-hidden text-base font-bold`} to={to}>
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