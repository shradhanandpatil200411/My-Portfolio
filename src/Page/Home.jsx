import Hero from "../Components/Hero";

function Home() {
  return (
    <>
      <div className='flex justify-between w-screen h-screen bg-linear-to-b from-black via-cyan-950 to-cyan-700   text-white'>
        <div>
          <h1>My Portfolio</h1>
        </div>
        <div className='w-1/2'>
          <Hero />
        </div>
      </div>
    </>
  );
}

export default Home;
