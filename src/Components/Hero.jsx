import { useGSAP } from "@gsap/react";
import gsap from "gsap";

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
            src='https://ik.imagekit.io/shradhanand/My-Portfolio/my-3D-model-img.png?updatedAt=1762856366757'
            alt='img-hero'
          />
        </div>

        <div>
          <div className='icon w-20 h-20 absolute  top-55 left-10 '>
            <img
              src='https://ik.imagekit.io/shradhanand/My-Portfolio/icon/react-icon.png?updatedAt=1762871383166'
              className='text-cyan-300 drop-shadow-cyan-300 drop-shadow-2xl w-full h-full'
            />
          </div>
          <div className='icon w-20 h-20 absolute top-10 left-30'>
            <img
              src='https://ik.imagekit.io/shradhanand/My-Portfolio/icon/nodeJs-icon.png?updatedAt=1762871383081'
              className='text-yellow-300 drop-shadow-yellow-300 drop-shadow-2xl w-full h-full'
            />
          </div>
          <div className='icon w-20 h-20 absolute -top-10 left-75'>
            <img
              src='https://ik.imagekit.io/shradhanand/My-Portfolio/icon/MongoDB_logo.png?updatedAt=1762871383046'
              className='text-green-800 drop-shadow-green-200 drop-shadow-2xl w-full h-full'
            />
          </div>
          <div className='icon w-20 h-20 absolute top-13 right-5'>
            <img
              src='https://ik.imagekit.io/shradhanand/My-Portfolio/icon/express-removebg.png?updatedAt=1762871383116'
              className='text-gray drop-shadow-gray-300 drop-shadow-2xl w-full h-full'
            />
          </div>
          <div className='icon w-20 h-20 absolute top-60 right-5'>
            <img
              src='https://ik.imagekit.io/shradhanand/My-Portfolio/icon/next.png?updatedAt=1762871383091'
              className='text-gray-800 drop-shadow-white drop-shadow-2xl w-full h-full'
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
