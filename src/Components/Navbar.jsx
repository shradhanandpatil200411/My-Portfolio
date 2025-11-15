import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef, useState } from "react";
import { NavLink } from "react-router";
import { IoIosMenu } from "react-icons/io";
import { RxCross1 } from "react-icons/rx";

function Navbar() {
  const navContainer = useRef();
  const navName = useRef();
  const [nav, setNav] = useState(1);
  const [cross, setCross] = useState(false);
  const [menu, setMenu] = useState(false);

  const { contextSafe } = useGSAP(
    () => {
      gsap.from(".nav", {
        onStart: () => {
          setMenu(false);
          setCross(false);
          setNav(1);
        },
        opacity: 0,
        x: 2000,
        duration: 0.5,
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
        onStart: () => {
          setMenu(true);
        },
        scrollTrigger: {
          trigger: "#home-contain",
          markers: false,
          start: "center top",
          end: "center center",
          toggleActions: "restart none none play",
        },
        x: 1000,
      });
      gsap.from(navName.current, {
        x: -100,
        opacity: 0,
        duration: 1,
      });
    },
    { revertOnUpdate: true }
  );

  const onMenuOpen = contextSafe(() => {
    setMenu(false);
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
    setMenu(true);
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
          nav ? "" : "backdrop-blur-2xl bg-white/20 rounded-full mt-5"
        }`}>
        <div className='cursor-pointer nav w-1/2 flex items-center'>
          {menu ? (
            <div onClick={onMenuOpen}>
              <IoIosMenu className='text-6xl bg-cyan-400 p-1 rounded-2xl shadow-2xl shadow-white  text-white' />
            </div>
          ) : (
            <div>
              <div>
                <svg
                  className='w-20 h-20 drop-shadow-xl drop-shadow-cyan-300'
                  width='271'
                  height='146'
                  viewBox='0 0 271 146'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'>
                  <path
                    id='logo-1'
                    d='M49.8581 58.6714C13.3827 58.6714 13.3827 10 49.8581 10C86.3335 10 143.74 10 143.74 10V35.3497'
                    stroke='white'
                    stroke-width='20'
                  />
                  <path
                    id='logo-2'
                    d='M46.8827 58.6754H233.383'
                    stroke='white'
                    stroke-width='20'
                    stroke-linecap='round'
                  />
                  <path
                    id='logo-1'
                    d='M217.883 87.9511C260.883 87.9511 260.883 135.629 217.883 135.629H143.525V110.797'
                    stroke='white'
                    stroke-width='20'
                  />
                  <path
                    id='logo-2'
                    d='M224.383 87.9535H37.8827'
                    stroke='white'
                    stroke-width='20'
                    stroke-linecap='round'
                  />
                  <path
                    id='logo-3'
                    d='M235.502 59L260.502 73'
                    stroke='white'
                    stroke-width='20'
                    stroke-linecap='round'
                  />
                  <path
                    id='logo-3'
                    d='M35.0015 88L10.0015 73'
                    stroke='white'
                    stroke-width='20'
                    stroke-linecap='round'
                  />
                </svg>
              </div>
            </div>
          )}
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
              to='/Skills'>
              Skills
            </NavLink>
          </div>
          <div className='cursor-pointer nav '>
            <NavLink
              className={(e) =>
                e.isActive
                  ? "border-b-cyan-400 border-b-2 text-cyan-400 font-semibold"
                  : "text-white"
              }
              to='/contact'>
              Contact
            </NavLink>
          </div>
          <div className='cursor-pointer  nav' onClick={onMenuClose}>
            {cross ? (
              <RxCross1 className='border text-main border-main text-4xl font-bold p-1 rounded-full' />
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
