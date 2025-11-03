import { NavLink } from "react-router";

function Navbar() {
  return (
    <>
      <nav className='flex fixed w-screen justify-between px-10 py-5 '>
        <div className='text-white'>logo</div>
        <div className='flex justify-around gap-10'>
          <NavLink
            className={(e) => (e.isActive ? "text-cyan-400" : "text-white")}
            to='/'>
            Home
          </NavLink>
          <NavLink
            className={(e) => (e.isActive ? "text-cyan-400" : "text-white")}
            to='/about'>
            About
          </NavLink>
          <NavLink
            className={(e) => (e.isActive ? "text-cyan-400" : "text-white")}
            to='/contact-us'>
            Contact Us
          </NavLink>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
