import { useGSAP } from "@gsap/react";
import gsap from "gsap";

import { useRef } from "react";

function Footer() {
  const imgRef = useRef();

  useGSAP(() => {
    let tl = gsap.timeline();

    tl.to(imgRef.current, {
      scale: 1.5,
      x: -300,
      y: 510,
      scrollTrigger: {
        trigger: "#contactContainer",
        markers: false,
        scrub: 1,
        start: "50 top",
        end: "bottom top",
      },
    });
    tl.from(".footerMessage", {
      opacity: 0,
      x: 100,
      stagger: {
        amount: 1,
      },
      scrollTrigger: {
        trigger: "#footer",
        markers: true,
        start: "200 center",
        end: "center center",
        scrub: 1,
      },
    });
  });
  return (
    <div id='footer' className='w-screen h-screen relative'>
      <div className='w-3/12 absolute z-50 right-20 -top-[55%] '>
        <img
          ref={imgRef}
          className='w-full h-full '
          src='https://ik.imagekit.io/shradhanand/My-Portfolio/icon/3d.png?updatedAt=1763142101377'
          alt='img'
        />
      </div>
      <div className='absolute top-50 flex gap-60  w-screen '>
        <h1 className='text-[250px] z-10 tracking-wider bg-clip-text text-transparent bg-[url(https://i.pinimg.com/1200x/2b/7b/46/2b7b46b48f49ed3af2a039bfd2793b87.jpg)] bg-cover bg-center font-[StorkFont]  footerMessage'>
          Thank
        </h1>
        <h1 className='text-[250px] z-10 tracking-wider bg-clip-text text-transparent bg-[url(https://i.pinimg.com/1200x/2b/7b/46/2b7b46b48f49ed3af2a039bfd2793b87.jpg)] bg-cover bg-center font-[StorkFont] footerMessage '>
          You
        </h1>
      </div>
    </div>
  );
}

export default Footer;
