import { useGSAP } from "@gsap/react";
import gsap, { Bounce } from "gsap";
import { SplitText } from "gsap/all";

function Loader() {
  useGSAP(() => {
    let tl = gsap.timeline();
    let split = SplitText.create("#myName", { type: "line works chars" });

    tl.to("#loader", {
      display: "block",
    });

    tl.from("#loader-bg", {
      y: -500,
      duration: 1.5,
      stagger: {
        amount: -1,
      },
    });

    tl.from("#logo-1", 2, {
      direction: "start",
      drawSVG: 0,
    });

    tl.from("#logo-2", 2, {
      drawSVG: 0,
    });

    tl.from("#logo-3", 1, {
      drawSVG: 0,
    });

    tl.from(split.chars, {
      x: 100,
      opacity: 0,
      duration: 1,
      stagger: {
        amount: 1,
      },
    });

    tl.to("#logo", {
      opacity: 0,
      duration: 0.5,
    });
    tl.to("#my-name", {
      opacity: 0,
      duration: 0.5,
    });

    tl.to("#loader-bg", {
      y: -500,
      stagger: {
        amount: -0.5,
      },
      opacity: 0,
      display: "none",
      duration: 1.5,
    });

    tl.to("#loader", {
      display: "none",
    });
  });
  return (
    <>
      <div
        id='loader'
        className='w-screen h-screen absolute z-50 bg-cyan-800 overflow-y-hidden'>
        <div id='loader-bg' className='flex '>
          <div
            id='loader-bg'
            className='bg-linear-to-b from-cyan-950 to-cyan-700 h-screen w-[20%]'></div>
          <div
            id='loader-bg'
            className='bg-linear-to-b from-cyan-950 to-cyan-700 h-screen w-[20%]'></div>
          <div
            id='loader-bg'
            className='bg-linear-to-b from-cyan-950 to-cyan-700 h-screen w-[20%]'></div>
          <div
            id='loader-bg'
            className='bg-linear-to-b from-cyan-950 to-cyan-700 h-screen w-[20%]'></div>
          <div
            id='loader-bg'
            className='bg-linear-to-b from-cyan-950 to-cyan-700 h-screen w-[20%]'></div>
        </div>
        <div
          id='logo'
          className='w-fit p-2 z-50 absolute top-[34%] left-[40%] '>
          <svg
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
          <p
            id='myName'
            className='text-2xl font-[NeueRegular] tracking-widest text-white mt-10 w-fit mx-auto'>
            Shradhanand Patil
          </p>
        </div>
      </div>
    </>
  );
}

export default Loader;
