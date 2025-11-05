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
      gsap.from(split.chars, {
        x: -100,
        opacity: 0,
        duration: 1,
        stagger: {
          amount: 1,
        },
      });
    },
    { scope: container.current, dependencies: container.current }
  );
  return (
    <>
      <div
        ref={container}
        className='flex justify-between relative w-screen  h-fit pt-20 '>
        <div className='w-1/2 z-20'>
          <div className=' flex flex-col justify-center pl-10 w-10/12  h-full gap-3'>
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
              MRNE Stack Developer | Animation Enthusiast
            </p>
            <p className='text-sm '>
              Building modern web experiences with MongoDB, React, Node.js,
              Express, and stunning GSAP-powered animations
            </p>
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
