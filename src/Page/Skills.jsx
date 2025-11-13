import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef, useState } from "react";
import { mySkillData } from "../Data/data";

function Skills() {
  const [index, setIndex] = useState(0);
  const mySkillRef = useRef();
  const headingRef = useRef();
  const paraRef = useRef();

  const { contextSafe } = useGSAP(
    () => {
      gsap.set("#skill-icon", {
        xPercent: -50,
        yPercent: -50,
        transformOrigin: "-50% -50%",
      });
      gsap.from("#skill-icon", {
        duration: 1,
        motionPath: {
          path: "#skill-path",
          align: "#skill-path",
          start: "0.6",
        },
        ease: "power2",
      });

      gsap.from(headingRef.current, {
        x: 200,
        opacity: 0,
        duration: 1,
      });
      gsap.from(paraRef.current, {
        x: -100,
        opacity: 0,
        duration: 1,
      });
    },
    { dependencies: [index], revertOnUpdate: true, scope: mySkillRef.current }
  );

  const onAnimation = contextSafe((i) => {
    if (index != i) {
      gsap.to("#skill-icon", {
        duration: 1,
        motionPath: {
          path: "#skill-path",
          align: "#skill-path",
          start: "0.5",
          end: "0",
        },
        opacity: 0,
        ease: "power2",
        onComplete: () => {
          setIndex(i);
        },
      });
      gsap.to(headingRef.current, {
        x: 200,
        opacity: 0,
        duration: 1,
      });
      gsap.to(paraRef.current, {
        x: -100,
        opacity: 0,
        duration: 1,
      });
    }
  });

  return (
    <>
      <div ref={mySkillRef} className=' w-screen h-screen pr-5 py-10'>
        <h1 className='w-fit ml-[36%] my-2 text-4xl font-bold font-heading-Montserrat'>
          My Skills
        </h1>
        <div className='flex w-full h-[60vh] gap-5'>
          <div className=' w-4/12 h-full relative overflow-hidden'>
            <div>
              <svg
                className=''
                width='410'
                height='350'
                viewBox='100 100 745 500'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'>
                <defs>
                  <linearGradient id='myGradient'>
                    <stop offset='0%' stopColor={mySkillData[index]?.color2} />
                    <stop
                      offset='100%'
                      stopColor={mySkillData[index]?.color3}
                    />
                  </linearGradient>
                </defs>
                <path
                  id='skill-path'
                  d='M10.4107 461.004C355.409 534.447 662.433 367.005 750.005 11.9741'
                  stroke='url(#myGradient)'
                  strokeWidth='150'
                />
              </svg>
            </div>
            <div className='absolute left-52 z-50 top-20 '>
              <img
                id='skill-icon'
                className='w-40 h-40 '
                src={mySkillData[index]?.iconImg}
                alt='skill-icon'
              />
            </div>
          </div>
          <div className='w-1/2 h-full'>
            <div className='overflow-hidden'>
              <h1
                ref={headingRef}
                className='font-heading-Space-Grotesk text-9xl font-bold z-20 tracking-tighter'
                style={{
                  backgroundImage: `linear-gradient(to bottom, ${mySkillData[index].color1}, ${mySkillData[index].color2} , ${mySkillData[index].color3})`,
                  backgroundClip: "text",
                  color: "transparent",
                }}>
                {mySkillData[index]?.name}
              </h1>
            </div>
            <p
              ref={paraRef}
              className='text-xl w-8/12 pt-5 tracking-wide font-semibold'>
              {mySkillData[index]?.dis}
            </p>
          </div>
        </div>
        <div className=' flex justify-evenly gap-2 h-[30vh] '>
          <div
            className='w-40 p-2 backdrop-blur-3xl rounded-4xl  text-center h-32 cursor-pointer'
            onClick={() => onAnimation(0)}>
            <img
              className='w-24 mx-auto'
              src='https://ik.imagekit.io/shradhanand/My-Portfolio/icon/react-icon.png?updatedAt=1762871383166'
              alt='rect'
            />
            <h1 className='text-xl '>React</h1>
          </div>
          <div
            className='w-40 p-2 backdrop-blur-3xl rounded-4xl  text-center h-32 cursor-pointer'
            onClick={() => onAnimation(1)}>
            <img
              className='w-24 mx-auto'
              src='https://ik.imagekit.io/shradhanand/My-Portfolio/icon/nodeJs-icon.png?updatedAt=1762871383081'
              alt='node'
            />
            <h1 className='text-xl'>Node</h1>
          </div>
          <div
            className='w-40 p-2 backdrop-blur-3xl rounded-4xl  text-center h-32 cursor-pointer '
            onClick={() => onAnimation(2)}>
            <img
              className='w-24 mx-auto'
              src='https://ik.imagekit.io/shradhanand/My-Portfolio/icon/express-removebg.png?updatedAt=1762871383116'
              alt='express'
            />
            <h1 className='text-xl'>Express</h1>
          </div>
          <div
            className='w-40 p-2 backdrop-blur-3xl rounded-4xl  text-center h-32 cursor-pointer'
            onClick={() => onAnimation(3)}>
            <img
              className='w-24 mx-auto'
              src='https://ik.imagekit.io/shradhanand/My-Portfolio/icon/MongoDB_logo.png?updatedAt=1762871383046'
              alt='mongoDB'
            />
            <h1 className='text-xl'>MongoDB</h1>
          </div>
          <div
            className='w-40 p-2 backdrop-blur-3xl rounded-4xl  text-center h-32 cursor-pointer'
            onClick={() => onAnimation(4)}>
            <img
              className='w-24 mx-auto'
              src='https://ik.imagekit.io/shradhanand/My-Portfolio/icon/next.png?updatedAt=1762871383091'
              alt='NextJs'
            />
            <h1 className='text-xl'>Next JS</h1>
          </div>
        </div>
      </div>
    </>
  );
}

export default Skills;
