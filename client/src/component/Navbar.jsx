
import NavLink from './NavLink'
import NavItem from './NavItem'

export const Navbar = () => {
  return (
    <section className='max-w-container  mx-auto'>
        <NavLink className="text-[2.5vh] text-white py-2 px-2 font-bold bg-red-500 "> 
            <div>
              logo
            </div>
              <NavItem to="#" innerText="Home"/>
              <NavItem innerText="Adminssion"/>
              <NavItem innerText="Student"/>
              <NavItem innerText="Teachers"/>
              <NavItem innerText="Events"/>
              <NavItem innerText="Gallery"/>
              <NavItem innerText="About"/>
              <NavItem innerText="Contact"/>
        </NavLink>
    </section>
  )
}
