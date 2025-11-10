import { FaReact } from "react-icons/fa6";
import { FaNodeJs } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Draggable } from "gsap/all";

function Hero() {
  useGSAP(() => {
    let tl = gsap.timeline();

    tl.from("#hero", {
      x: 600,
      opacity: 0,
      duration: 1.5,
    });

    tl.from(".icon", {
      opacity: 0,
      duration: 1,
      stagger: {
        amount: 0.5,
      },
      top: 250,
      left: 250,
    });

    tl.to(".icon", {
      scrollTrigger: {
        trigger: "#hero",
        markers: false,
        start: "top 20%",
        end: "80% center ",
        scrub: 1,
      },
      top: 300,
      left: 300,
      opacity: 0,
      stagger: {
        amount: 0.5,
        from: "end",
      },
    });

    tl.to(".icon", {
      duration: 1,
      stagger: {
        amount: 1,
        from: "random",
        y: 10,
        yoyo: true,
        repeat: -1,
      },
    });
  });
  return (
    <>
      <div id='hero' className='px-15 w-full h-full pt-10 mr-8 mt-10 '>
        <div className='w-[90%]'>
          <img
            className='z-20  mx-20 '
            src='../../public/Images/my-3D-model-img.png'
            alt='img-hero'
          />
        </div>

        <div className=''>
          <div className='icon w-20 h-20 absolute  top-55 left-10 '>
            <FaReact className='text-cyan-300 drop-shadow-cyan-300 drop-shadow-2xl w-full h-full' />
          </div>
          <div className='icon w-20 h-20 absolute top-10 left-30'>
            <FaNodeJs className='text-yellow-300 drop-shadow-yellow-300 drop-shadow-2xl  w-full h-full' />
          </div>
          <div className='icon w-20 h-20 absolute -top-10 left-75'>
            <SiMongodb className='text-green-800 drop-shadow-green-200 drop-shadow-2xl w-full h-full' />
          </div>
          <div className='icon w-20 h-20 absolute top-13 right-5'>
            <SiExpress className='text-gray drop-shadow-gray-300 drop-shadow-2xl w-full h-full' />
          </div>
          <div className='icon w-20 h-20 absolute top-60 right-5'>
            <TbBrandNextjs className='text-gray-800 drop-shadow-white drop-shadow-2xl w-full h-full' />
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
