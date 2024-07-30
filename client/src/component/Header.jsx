
import NavLink from './NavLink'
import NavItem from './NavItem'

export const Header = () => {
  return (
    <section className='pt-1 xl:py-1 bg-[#c21818] '>
    <NavLink className=" text-[4px] md:text-[2.2vh]  tracking-wide max-w-container mx-auto  font-semibold xl:font-bold text-white cursor-default">
        <NavItem to="#" className="cursor-default " innerText="Mirpur, Dhaka-1216, Bangladesh"/>
        <NavItem to="#" className="cursor-default " innerText="+88024354395"/>
        <NavItem to="#" className="cursor-default " innerText="blink@contact.info"/>
    </NavLink>
    </section>
  )
}
