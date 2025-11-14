import { useGSAP } from "@gsap/react";
import gsap from "gsap";

function About() {
  useGSAP(
    () => {
      gsap.from("#about-img", {
        scrollTrigger: {
          trigger: "#about-img",
          start: "40% 80%",
          end: "center 20%",
          scrub: 1,
          markers: false,
        },
        y: 100,
      });

      gsap.from("#my-img", {
        scrollTrigger: {
          trigger: "#about-img",
          start: "40% 80%",
          end: "center 20%",
          toggleActions: "play none none restart",
          markers: false,
        },
        scale: 1,
        y: 10,
        yoyo: true,
        repeat: Infinity,
        duration: 1.5,
        ease: "power1.out",
      });

      gsap.from("#about-contain", {
        scrollTrigger: {
          trigger: "#about-contain",
          start: "-200 center",
          end: "top center",
          scrub: 1,
          markers: false,
        },
        y: 60,
      });
    },
    { scope: "#about" }
  );
  return (
    <>
      <div id='about' className=' flex  gap-20 p-10 relative'>
        <div
          id='about-img'
          className='h-[80vh] mt-10  px-10 pt-10 rounded-t-full bg-linear-to-b from-amber-200 to-amber-600 w-[35vw] overflow-hidden z-20'>
          <img
            id='my-img'
            className='h-[90%] w-full drop-shadow-xl drop-shadow-black'
            src='https://ik.imagekit.io/shradhanand/My-Portfolio/my-3D-model-2.png?updatedAt=1762856366819'
            alt='3D-Model'
          />
        </div>
        <div className='w-1/2 z-20'>
          <div className=' mx-auto mt-20 flex flex-col gap-10'>
            <h1 className='text-8xl font-heading-Space-Grotesk font-bold '>
              About Me
            </h1>
            <div id='about-contain'>
              <p className='tracking-widest'>
                Hello! I’m{" "}
                <span className='text-gold font-bold font-heading-Space-Grotesk'>
                  Shradhanand Patil
                </span>
                , a passionate MERN stack developer with 3 years of hands-on
                experience in building scalable and dynamic web applications. My
                expertise lies in React.js, Node.js, Next.js, Express, and
                MongoDB, and I also have a strong foundation in GSAP for
                creating engaging animations and interactive user experiences. I
                am committed to writing clean, efficient code and delivering
                robust solutions that meet real-world challenges.
              </p>
            </div>

            <div>
              <h1 className='text-4xl font-heading-Poppins font-bold'>
                Find Me On
              </h1>
              <div id='social-icons' className='flex gap-5'>
                <div className=' text-white hover:text-gold hover:drop-shadow-xl hover:drop-shadow-gold transition-all  cursor-pointer p-5 w-fit mt-2'>
                  <img
                    src='https://ik.imagekit.io/shradhanand/My-Portfolio/icon/git.png?updatedAt=1762872748886'
                    className='w-20 h-20 '
                  />
                </div>
                <div className=' text-white hover:text-gold hover:drop-shadow-xl hover:drop-shadow-gold transition-all  cursor-pointer p-5 w-fit mt-2'>
                  <img
                    src='https://ik.imagekit.io/shradhanand/My-Portfolio/icon/Linkedin.png?updatedAt=1762872748966'
                    className='w-20 h-20 '
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
