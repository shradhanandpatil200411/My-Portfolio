import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef, useState } from "react";
import { NavLink } from "react-router";
import { RxCross1 } from "react-icons/rx";

function Navbar() {
  const navContainer = useRef();
  const [nav, setNav] = useState(1);
  const [cross, setCross] = useState(false);

  const { contextSafe } = useGSAP({
    scope: navContainer,
    revertOnUpdate: true,
  });

  useGSAP(() => {
    gsap.from(".nav", {
      opacity: 0,
      x: 2000,
      duration: 1,
      ease: "power4.out",
      stagger: {
        amount: 0.8,
      },
      scrollTrigger: {
        trigger: navContainer.current,
        markers: false,
        start: "top top",
        toggleActions: "play none none restart",
      },
    });

    gsap.to(".nav", {
      scrollTrigger: {
        trigger: "#home-contain",
        markers: false,
        start: "center center",
        end: "center center",
        toggleActions: "restart none none play",
      },
      x: 1000,
    });
  });

  const onMenuOpen = contextSafe(() => {
    setNav(nav ? 0 : 1);
    setCross(true);
    gsap.to(".nav", {
      x: 0,
      stagger: {
        amount: 0.5,
      },
    });
  });

  const onMenuClose = contextSafe(() => {
    setCross(false);
    setNav(nav ? 0 : 1);
    gsap.to(".nav", {
      x: 1000,
      stagger: {
        amount: 0.5,
      },
    });
  });

  return (
    <>
      <nav
        ref={navContainer}
        className={`flex fixed w-full  z-50 justify-between items-center h-20 px-10 ${
          nav ? "" : "backdrop-blur-2xl rounded-full mt-5 "
        }`}>
        <div className='cursor-pointer nav w-1/2 '>
          <NavLink to='/' onClick={onMenuOpen}>
            <img
              className='w-36 cursor-pointer'
              src='../../public/Images/logo.png'
              alt='logo'
            />
          </NavLink>
        </div>
        <div className='flex justify-around gap-10 w-1/2 h-full items-center'>
          <div className='cursor-pointer nav  '>
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
          <div className='cursor-pointer nav '>
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
          <div className='cursor-pointer nav '>
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
          <div className='cursor-pointer nav '>
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
          <div className='cursor-pointer  nav ' onClick={onMenuClose}>
            {cross ? (
              <RxCross1 className='bg-main text-4xl font-bold  rounded-full' />
            ) : (
              ""
            )}
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
