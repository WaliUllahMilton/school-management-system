/* eslint-disable react/prop-types */

 const NavLink = ({children}) => {
  return (
    <ul className={`flex max-w-container gap-6  mx-auto`}>
      {children}
    </ul>
  )
}

export default NavLink
