import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";

function MySkill() {
  const frontEndRef = useRef();
  const backEndRef = useRef();
  useGSAP(() => {
    let tl = gsap.timeline();

    tl.from("#stroke-1", {
      drawSVG: 0,
      scrollTrigger: {
        trigger: frontEndRef.current,
        markers: false,
        start: "top center",
        end: "center center",
        scrub: true,
      },
    });

    tl.from("#stroke-2", {
      drawSVG: 0,
      scrollTrigger: {
        trigger: backEndRef.current,
        markers: false,
        start: "-150 center",
        end: "top center",
        scrub: true,
      },
    });

    tl.from("#stroke-3", {
      drawSVG: 0,
      scrollTrigger: {
        trigger: backEndRef.current,
        markers: false,
        start: "top center",
        end: "center center",
        scrub: true,
      },
    });

    gsap.from("#skills", {
      opacity: 0,
      y: 10,
      duration: 2,
    });
  });
  return (
    <>
      <div id='mySkill'>
        <div className='p-5  relative'>
          <div className=' p-10 relative'>
            <div className='w-fit mx-auto'>
              <h1 className='w-full h-full text-4xl font-bold font-heading-Poppins'>
                My Skills
              </h1>
            </div>
            <div
              ref={frontEndRef}
              className='absolute left-[39.7%] drop-shadow-2xl '>
              <svg
                width='252'
                height='608'
                viewBox='0 0 252 608'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'>
                <path
                  id='stroke-1'
                  d='M126 2.5V203.5H2.5'
                  stroke='white'
                  stroke-width='5'
                  stroke-linecap='round'
                />
                <path
                  id='stroke-1'
                  d='M125.5 2.5V203.5H249'
                  stroke='white'
                  stroke-width='5'
                  stroke-linecap='round'
                />
                <path
                  id='stroke-2'
                  d='M126 203.5V404.5'
                  stroke='white'
                  stroke-width='5'
                  stroke-linecap='round'
                />
                <path
                  id='stroke-2'
                  d='M125.5 203.5V403.5'
                  stroke='white'
                  stroke-width='5'
                  stroke-linecap='round'
                />
                <path
                  id='stroke-3'
                  d='M126 404.5V605.5H2.5'
                  stroke='white'
                  stroke-width='5'
                  stroke-linecap='round'
                />
                <path
                  id='stroke-3'
                  d='M125.5 404.5V605.5H249'
                  stroke='white'
                  stroke-width='5'
                  stroke-linecap='round'
                />
              </svg>
            </div>
            <div id='front-end' className='flex p-5 gap-5'>
              <div className='w-1/2 h-[80vh] '></div>
              <div className='w-1/2 h-[80vh] '>
                <div
                  id='skills'
                  className='flex justify-center border-cyan-400 border items-center mx-auto w-8/12 p-5'>
                  <img
                    src='https://ik.imagekit.io/shradhanand/My-Portfolio/icon/react-icon.png?updatedAt=1762871383166'
                    className='w-20 h-20 text-cyan-400 '
                    id='react'
                  />
                  <p>
                    Powerful JavaScript library for building interactive UIs.
                  </p>
                </div>
              </div>
            </div>
            <div ref={backEndRef} className=' flex p-5 gap-5'>
              <div className='w-1/2 h-[80vh] '>
                <h1>Back end Left Side</h1>
              </div>
              <div className='w-1/2 h-[80vh] '>
                <h1>Back end Right Side</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default MySkill;
