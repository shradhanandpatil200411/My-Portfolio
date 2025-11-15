import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef, useState } from "react";
import { mySkillData } from "../Data/data";
import SkillsSection from "../Components/SkillsSection";
import SkillsCard from "../Components/SkillsCard";

function Skills() {
  const [index, setIndex] = useState(0);
  const [isDetails, setIsDetails] = useState(false);
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
        scrollTrigger: {
          trigger: mySkillRef.current,
          markers: false,
          toggleActions: "play none none restart",
          start: "30% center",
          end: "30% center",
        },
      });

      gsap.from(headingRef.current, {
        x: 200,
        opacity: 0,
        duration: 1,
        scrollTrigger: {
          trigger: mySkillRef.current,
          markers: false,
          toggleActions: "play none none restart",
          start: "30% center",
          end: "30% center",
        },
      });
      gsap.from(paraRef.current, {
        y: 100,
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
        y: 100,
        opacity: 0,
        duration: 1,
      });
    }
  });

  return (
    <>
      <div ref={mySkillRef} className='w-screen h-screen pr-5 pb-10'>
        <h1
          className='w-fit ml-[30%]  p-2 text-6xl font-bold font-heading-Montserrat bg-clip-text text-transparent'
          style={{
            backgroundImage:
              "linear-gradient(to right, #ff006e, #fb5607, #ffbe0b)",
            backgroundClip: "text",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}>
          My Skills
        </h1>
        <div className='flex w-[120%] h-[60vh] relative'>
          <div className='w-4/12  h-full relative overflow-hidden'>
            <div>
              <svg
                width='610'
                height='350'
                viewBox='100 100 850 500'
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
            <div>
              <img
                id='skill-icon'
                className='w-40 h-40 '
                src={mySkillData[index]?.iconImg}
                alt='skill-icon'
              />
            </div>
          </div>
          <div className='w-7/12 h-full flex  absolute left-[28%]'>
            <div className='w-7/12 flex justify-center flex-col'>
              <h1
                ref={headingRef}
                className='font-heading-Space-Grotesk text-8xl font-bold z-20 tracking-tighter'
                style={{
                  backgroundImage: `linear-gradient(to bottom, ${mySkillData[index].color1}, ${mySkillData[index].color2} , ${mySkillData[index].color3})`,
                  backgroundClip: "text",
                  color: "transparent",
                }}>
                {mySkillData[index]?.name}
              </h1>
            </div>
            <div className='w-5/12'>
              <SkillsCard
                paraRef={paraRef}
                index={index}
                isDetails={isDetails}
                setIsDetails={setIsDetails}
              />
            </div>
          </div>
        </div>
        <div className=' flex justify-evenly gap-2 h-[30vh] '>
          {mySkillData.map((card) => (
            <SkillsSection
              key={card.id}
              onAnimation={onAnimation}
              id={card.id}
              iconImg={card.iconImg}
              name={card.name}
              index={index}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default Skills;
