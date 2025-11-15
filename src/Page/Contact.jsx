import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";

function Contact() {
  const contactRef = useRef();
  const formRef = useRef();
  const contactContainer = useRef();

  useGSAP(() => {
    // Animate contact info from left
    gsap.from(contactRef.current, {
      x: -200,
      opacity: 0,
      duration: 1,
      ease: "back.inOut",
      scrollTrigger: {
        trigger: contactContainer.current,
        markers: false,
        toggleActions: "play none none reverse",
        start: "top center",
        end: "bottom center",
      },
    });

    // Animate container from right
    gsap.from(contactContainer.current, {
      x: 500,
      opacity: 0,
      duration: 1,
      ease: "back.inOut",
      scrollTrigger: {
        trigger: contactContainer.current,
        markers: false,
        toggleActions: "play none none reverse",
        start: "top center",
        end: "bottom center",
      },
    });

    // Animate form inputs with stagger
    gsap.from(".form", {
      y: 100,
      opacity: 0,
      duration: 1,
      stagger: 0.3,
      ease: "power2.out",
      scrollTrigger: {
        trigger: contactContainer.current,
        markers: false,
        toggleActions: "play none none reverse",
        start: "top center",
        end: "bottom center",
      },
    });
  });
  return (
    <>
      <div
        ref={contactContainer}
        id='contactContainer'
        className='mt-20 w-screen h-screen'>
        <div className='bg-white backdrop-blur-2xl w-7/12 mx-auto h-full relative'>
          <div
            ref={contactRef}
            className='w-1/2 h-9/12 absolute -left-40 top-20 px-10'
            style={{
              backgroundImage:
                "linear-gradient(135deg, #184770, #1E7E94, #15EDD0)",
              backgroundClip: "padding-box",
            }}>
            <div className=''>
              <h1 className='text-6xl font-semibold  my-10 '>Contact</h1>
            </div>
            <div className='my-7'>
              <h1 className='text-2xl font-semibold text-gold'>
                Shradhanand Patil
              </h1>
              <p className='font-thin'>
                MERN Stack Developer Mumbai, Maharashtra, India
              </p>
            </div>
            <div className='my-7'>
              <div className='flex gap-2 my-2'>
                <span>
                  <img
                    className='w-5 h-5'
                    src='https://ik.imagekit.io/shradhanand/My-Portfolio/icon/email.png?updatedAt=1763196585413'
                    alt='email'
                  />
                </span>{" "}
                <span>patilshradhanand@gmail.com</span>
              </div>
              <div className='my-7'>
                <h1 className='text-xl  my-4'>Find Me On</h1>
                <div className='flex gap-10 '>
                  <img
                    className='w-10 h-10 rounded-xl hover:shadow-md duration-500 cursor-pointer shadow-main bg-dark hover:border hover:border-main transition-all p-2'
                    src='https://ik.imagekit.io/shradhanand/My-Portfolio/icon/git.png?updatedAt=1762872748886'
                    alt='git-hub'
                  />
                  <img
                    className='w-10 h-10 rounded-xl hover:shadow-md duration-500 cursor-pointer shadow-main bg-dark hover:border hover:border-main transition-all p-2'
                    src='https://ik.imagekit.io/shradhanand/My-Portfolio/icon/Linkedin.png?updatedAt=1762872748966'
                    alt='linkedin'
                  />
                </div>
              </div>
            </div>
          </div>
          <div
            ref={formRef}
            className=' w-8/12 ml-[33.5%] h-full p-10 text-dark'>
            <div>
              <h1 className='form text-5xl font-semibold '>Get in Touch</h1>
              <p className='form text-gray-600 font-semibold text-md my-1 ml-2'>
                Feel Free to drop a line below!
              </p>
            </div>
            <div>
              <form>
                <div className='form relative mt-9 w-full  group'>
                  <label
                    className='absolute -top-6 group-focus-within:text-cyan-600 text-sm font-semibold'
                    htmlFor='name'>
                    Name
                  </label>
                  <input
                    type='text'
                    id='name'
                    className='border w-full rounded-lg px-4 py-1 outline-none focus:border-cyan-600 focus:border-2 '
                  />
                </div>
                <div className='form relative mt-9 w-full group'>
                  <label
                    className='absolute -top-6 group-focus-within:text-cyan-600 text-sm font-semibold'
                    htmlFor='phone'>
                    Phone Number
                  </label>
                  <input
                    type='number'
                    id='phone'
                    className='border w-full rounded-lg px-4 py-1 outline-none focus:border-cyan-600 focus:border-2 '
                  />
                </div>
                <div className='form relative mt-9 w-full group'>
                  <label
                    className='absolute -top-6 group-focus-within:text-cyan-600 text-sm font-semibold'
                    htmlFor='email'>
                    Email
                  </label>
                  <input
                    type='email'
                    id='email'
                    className='border w-full rounded-lg px-4 py-1 outline-none focus:border-cyan-600 focus:border-2 '
                  />
                </div>
                <div className='form relative mt-9 w-full group'>
                  <label
                    className='absolute -top-6 group-focus-within:text-cyan-600 text-sm font-semibold'
                    htmlFor='sub'>
                    Subject
                  </label>
                  <input
                    type='text'
                    id='sub'
                    className='border w-full rounded-lg px-4 py-1 outline-none focus:border-cyan-600 focus:border-2'
                  />
                </div>
                <div className='form relative mt-9 w-full group'>
                  <label
                    className='absolute -top-6 group-focus-within:text-cyan-600 text-sm font-semibold'
                    htmlFor='message'>
                    Message
                  </label>
                  <textarea
                    type='text'
                    id='message'
                    className='border w-full rounded-lg px-4 py-1 outline-none focus:border-cyan-600 focus:border-2'
                  />
                </div>
                <div className='form w-full mt-4'>
                  <button
                    className='px-4 py-2 text-lg font-semibold rounded-lg w-full text-white cursor-pointer'
                    style={{
                      backgroundImage:
                        "linear-gradient(135deg, #184770, #1E7E94, #15EDD0)",
                    }}>
                    Send Details
                  </button>
                </div>
              </form>
            </div>
            <div></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
