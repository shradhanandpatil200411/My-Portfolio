import { FaReact } from "react-icons/fa";

function About() {
  return (
    <>
      <div className='h-screen flex  gap-20 p-10'>
        <div className='mt-10'>
          <img
            className='h-full w-full drop-shadow-xl drop-shadow-main'
            src='../../public/Images/my-3D-model-2.png'
            alt='3D-Model'
          />
        </div>
        <div className='w-1/2'>
          <div className='w-fit mx-auto mt-10 flex flex-col gap-10'>
            <h1 className='text-6xl font-heading-Space-Grotesk font-bold '>
              About Me
            </h1>
            <p>
              Hello! I’m Shradhanand Patil, a passionate MERN stack developer
              with 3 years of hands-on experience in building scalable and
              dynamic web applications. My expertise lies in React.js, Node.js,
              Next.js, Express, and MongoDB, and I also have a strong foundation
              in GSAP for creating engaging animations and interactive user
              experiences. I am committed to writing clean, efficient code and
              delivering robust solutions that meet real-world challenges.
            </p>
            <div>
              <h1 className='text-4xl font-heading-Poppins font-bold'>
                Best Skill On
              </h1>
              <div className='border rounded-full text-gold p-5 w-fit mt-2'>
                <FaReact className='w-20 h-20 ' />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
