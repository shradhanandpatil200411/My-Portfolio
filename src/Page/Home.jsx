import { useGSAP } from "@gsap/react";
import Hero from "../Components/Hero";
import gsap from "gsap";
import { SplitText } from "gsap/all";
import About from "./About";
import { useRef } from "react";

function Home() {
  const container = useRef();
  useGSAP(
    () => {
      let split = SplitText.create("#name-heading", { type: "chars" });
      let tl = gsap.timeline();
      tl.from(split.chars, {
        x: -100,
        opacity: 0,
        duration: 1,
        stagger: {
          amount: 1,
        },
      });
      tl.from("#home-contain", {
        scrollTrigger: {
          trigger: "#home-contain",
          markers: false,
          start: "50 center",
          end: "bottom bottom",
          scrub: 1,
        },
        y: 100,
      });
    },
    { scope: container.current, dependencies: container.current }
  );
  return (
    <>
      <div
        ref={container}
        className='flex justify-between relative w-screen  h-fit pt-20 '>
        <div id='home-contain' className='w-1/2  '>
          <div className=' flex flex-col pl-10 pt-24 w-full  h-full gap-3'>
            <h2 className='text-3xl '>
              <span className='text-main font-heading-Space-Grotesk'>
                Hello
              </span>
              , My Name Is
            </h2>
            <h1
              id='name-heading'
              className='text-5xl font-heading-Space-Grotesk font-bold text-gold'>
              Shradhanand Patil
            </h1>
            <p className='text-sm'>
              MERN Stack Developer | Animation Enthusiast
            </p>
            <p className='text-sm '>
              Building modern web experiences with MongoDB, React, Node.js,
              Express, and stunning GSAP-powered animations
            </p>
            <div>
              <button className='border border-gold tracking-wider px-8 hover:bg-gold transition-all duration-500 cursor-pointer py-2 rounded-xl font-heading-Montserrat font-semibold'>
                Contact
              </button>
            </div>
          </div>
        </div>

        <div className='w-1/2 '>
          <Hero />
        </div>
      </div>
      <div>
        <About />
      </div>
    </>
  );
}

export default Home;
