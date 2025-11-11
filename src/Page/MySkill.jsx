import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React from "react";
import { FaReact } from "react-icons/fa";
import { SiRedux } from "react-icons/si";
import { SiReactrouter } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";
import { RiJavascriptLine } from "react-icons/ri";
import { RiTailwindCssLine } from "react-icons/ri";
import { FaCss3 } from "react-icons/fa";

function MySkill() {
  useGSAP(() => {
    let tl = gsap.timeline();
    tl.from("#stroke-1", {
      drawSVG: 0,
      scrollTrigger: {
        trigger: "#front-end",
        markers: false,
        start: "top center",
        end: "center center",
        scrub: true,
      },
    });

    tl.from("#stroke-2", {
      drawSVG: 0,
      scrollTrigger: {
        trigger: "#back-end",
        markers: false,
        start: "-150 center",
        end: "top center",
        scrub: true,
      },
    });

    tl.from("#stroke-3", {
      drawSVG: 0,
      scrollTrigger: {
        trigger: "#back-end",
        markers: false,
        start: "top center",
        end: "center center",
        scrub: true,
      },
    });
  });
  return (
    <>
      <div>
        <div className='p-5 border-2 border-green-400'>
          <div className='border-2 border-amber-400 p-10 relative'>
            <div className='w-fit mx-auto'>
              <h1 className='w-full h-full text-4xl font-bold font-heading-Poppins'>
                My Skills
              </h1>
            </div>
            <div
              id='front-end'
              className='absolute left-[39.7%] drop-shadow-2xl drop-shadow-cyan-300'>
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
            <div
              id='front-end'
              className='border-2 border-cyan-300 flex p-5 gap-5'>
              <div className='w-1/2 h-[80vh] border-2 border-pink-300'>
                {/* <div className='flex justify-center '>
                  <FaReact className='w-20 h-20 text-cyan-400 ' id='react' />
                  <p>
                    Powerful JavaScript library for building interactive UIs.
                  </p>
                </div>
                <div>
                  <SiRedux />
                  <p>State management library for predictable data flow.</p>
                </div>
                <div>
                  <SiReactrouter />
                  <p>
                    Handles navigation and routing in single-page React apps.
                  </p>
                </div>
                <div>
                  <TbBrandNextjs />
                  <p>
                    React framework for server-side rendering and static sites
                  </p>
                </div>
                <div>
                  <RiJavascriptLine />
                  <p>
                    Core scripting language for web development and
                    interactivity.
                  </p>
                </div>
                <div>
                  <RiTailwindCssLine />
                  <p>Utility-first CSS framework for rapid custom styling.</p>
                </div>
                <div>
                  <FaCss3 />
                  <p>
                    Styles web pages for layout, design, and responsiveness.
                  </p>
                </div> */}
              </div>
              <div className='w-1/2 h-[80vh] border-2 border-red-600'>
                <h1>Front end Right Side</h1>
              </div>
            </div>
            <div id='back-end' className='border-2 border-black flex p-5 gap-5'>
              <div className='w-1/2 h-[80vh] border-2 border-pink-300'>
                <h1>Back end Left Side</h1>
              </div>
              <div className='w-1/2 h-[80vh] border-2 border-red-600'>
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
