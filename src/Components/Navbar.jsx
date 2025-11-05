import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { NavLink } from "react-router";

function Navbar() {
  useGSAP(() => {
    gsap.from(".logo", {
      opacity: 0,
      x: -400,
      duration: 0.5,
    });
    gsap.from(".nav", {
      opacity: 0,
      x: 400,
      duration: 0.5,
      stagger: {
        amount: 0.5,
      },
    });
  });
  return (
    <>
      <nav className='flex fixed w-screen backdrop-blur-xl z-50 justify-between items-center h-20 px-10  '>
        <div className='cursor-pointer logo'>
          <NavLink to='/'>
            <img
              className='w-36 cursor-pointer'
              src='../../public/Images/logo.png'
              alt='logo'
            />
          </NavLink>
        </div>
        <div className='flex justify-around gap-10 h-full items-center'>
          <div className='cursor-pointer nav '>
            <NavLink
              className={(e) =>
                e.isActive
                  ? "border-b-cyan-400 border-b-2 text-cyan-400 font-semibold"
                  : "text-white"
              }
              to='/'>
              Home
            </NavLink>
          </div>
          <div className='cursor-pointer nav'>
            <NavLink
              className={(e) =>
                e.isActive
                  ? "border-b-cyan-400 border-b-2 text-cyan-400 font-semibold"
                  : "text-white"
              }
              to='/about'>
              About
            </NavLink>
          </div>
          <div className='cursor-pointer nav'>
            <NavLink
              className={(e) =>
                e.isActive
                  ? "border-b-cyan-400 border-b-2 text-cyan-400 font-semibold"
                  : "text-white"
              }
              to='/resume'>
              Resume
            </NavLink>
          </div>
          <div className='cursor-pointer nav'>
            <NavLink
              className={(e) =>
                e.isActive
                  ? "border-b-cyan-400 border-b-2 text-cyan-400 font-semibold"
                  : "text-white"
              }
              to='/contact-us'>
              Contact Us
            </NavLink>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
