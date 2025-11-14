import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef, useState } from "react";
import { mySkillData } from "../Data/data";
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
      <div ref={mySkillRef} className='w-screen  pr-5 pb-10'>
        <h1 className='w-fit ml-[30%] mb-5 p-2 text-6xl font-bold font-heading-Montserrat bg-clip-text text-transparent bg-linear-to-r from-gradient-1 via-gradient-2 to-gradient-3'>
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
          <div className='w-8/12 h-full flex  absolute left-[30%]'>
            <div className='w-fit flex justify-center flex-col'>
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
            <div
              ref={paraRef}
              className='text-white w-[30%] m-10 rounded-2xl p-5 backdrop-blur-3xl bg-white/20 '
              style={{
                boxShadow: `5px 10px 20px ${mySkillData[index].color2} `,
              }}>
              <div>
                <div className='flex justify-evenly'>
                  <div
                    className={`cursor-pointer font-semibold`}
                    style={
                      isDetails
                        ? { color: "white" }
                        : { color: `${mySkillData[index].color3}` }
                    }
                    onClick={() => setIsDetails(false)}>
                    Overview
                  </div>
                  <div
                    className='cursor-pointer font-semibold'
                    style={
                      isDetails
                        ? { color: `${mySkillData[index].color3}` }
                        : { color: "white" }
                    }
                    onClick={() => setIsDetails(true)}>
                    Details
                  </div>
                </div>
                {isDetails ? (
                  <div className='mt-5'>
                    {mySkillData[index].relatedTech.map((data, index) => (
                      <ul key={index}>
                        <li className='text-sm my-1'>
                          <span className='font-semibold'>{data.name}</span> :{" "}
                          <span>{data.dis}</span>{" "}
                        </li>
                      </ul>
                    ))}
                  </div>
                ) : (
                  <div className='mt-2'>
                    <div className='flex items-center gap-5'>
                      <img
                        className='w-20 h-20'
                        src={mySkillData[index].iconImg}
                        alt='icon-img'
                      />
                      <h1 className='text-xl'>
                        V {mySkillData[index].version}
                      </h1>
                    </div>

                    <p className='text-sm mt-2'>{mySkillData[index].dis}</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
        <div className=' flex justify-evenly gap-2 h-[30vh] '>
          {mySkillData.map((card) => (
            <SkillsCard
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
