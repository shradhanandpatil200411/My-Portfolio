import { FaReact } from "react-icons/fa6";
import { FaNodeJs } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

function Hero() {
  useGSAP(() => {
    let tl = gsap.timeline();

    tl.from("#hero", {
      top: -500,
      opacity: 0,
      ease: "bounce",
      duration: 1,
    });
    tl.from(".icon", {
      opacity: 0,
      duration: 1,
      stagger: {
        amount: 2,
      },
      top: 250,
      left: 250,
    });
  });
  return (
    <>
      <div id='hero' className='mt-16 w-full relative mr-8 p-20'>
        <div>
          <img
            className='z-20'
            src='../../public/Images/my-3D-model-img.png'
            alt='img-hero'
          />
        </div>
        <div className='-z-10'>
          <div className='icon w-20 h-20 absolute top-50 left-0 '>
            <FaReact className='text-cyan-300 drop-shadow-cyan-300 drop-shadow-2xl w-full h-full' />
          </div>
          <div className='icon w-20 h-20 absolute top-10 left-25'>
            <FaNodeJs className='text-yellow-300 drop-shadow-yellow-300 drop-shadow-2xl  w-full h-full' />
          </div>
          <div className='icon w-20 h-20 absolute -top-10 left-70'>
            <SiMongodb className='text-green-800 drop-shadow-green-200 drop-shadow-2xl w-full h-full' />
          </div>
          <div className='icon w-20 h-20 absolute top-0 right-20'>
            <SiExpress className='text-gray drop-shadow-gray-300 drop-shadow-2xl w-full h-full' />
          </div>
          <div className='icon w-20 h-20 absolute top-50 right-14'>
            <TbBrandNextjs className='text-gray-800 drop-shadow-white drop-shadow-2xl w-full h-full' />
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
