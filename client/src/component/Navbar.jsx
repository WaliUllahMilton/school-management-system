
import NavLink from './NavLink'
import NavItem from './NavItem'
import { Header } from './Header'

export const Navbar = () => {
  return (
    <section className='max-w-screen  '>
        <div className='bg-[#c21818] fixed z-50 top-0 left-0 right-0'>
        <Header/>
        <NavLink className="text-[2.5vh] max-w-container mx-auto text-white py-2  font-bold  "> 
            <div>
              xyz School
            </div>
              <NavItem to="/" innerContent="Home"/>
              <NavItem innerContent="Adminssion"/>
              <NavItem innerContent="Student" to="student/signup"/>
              <NavItem innerContent="Teachers"/>
              <NavItem to="/admin/login" innerContent="Admin"/>
              <NavItem innerContent="Gallery"/>
              <NavItem innerContent="About"/>
              <NavItem innerContent="Contact"/>
        </NavLink>
        </div>
    </section>
  )
}
