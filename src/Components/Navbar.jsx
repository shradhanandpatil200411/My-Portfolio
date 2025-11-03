import { NavLink } from "react-router";

function Navbar() {
  return (
    <>
      <nav className='flex justify-between px-2 bg-black text-white'>
        <div>logo</div>
        <div>
          <NavLink to='/'>Home</NavLink>
          <NavLink to='/about'>About</NavLink>
          <NavLink to='/contact-us'>Contact Us</NavLink>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
