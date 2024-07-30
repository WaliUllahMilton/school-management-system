/* eslint-disable react/prop-types */
 const NavLink = ({children,className}) => {
  return (
    <ul className={`${className} font-roboto flex max-w-container  justify-between`}>
      {children}
    </ul>
  )
}

export default NavLink
