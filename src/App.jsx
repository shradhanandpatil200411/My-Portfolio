import gsap from "gsap";
import Navbar from "./Components/Navbar";
import MainRoutes from "./Routes/mainRoutes";
import { ScrollTrigger, SplitText } from "gsap/all";
import { useGSAP } from "@gsap/react";
import LocomotiveScroll from "locomotive-scroll";
import { useEffect } from "react";

function App() {
  gsap.registerPlugin(useGSAP, ScrollTrigger, SplitText);

  useEffect(() => {
    // eslint-disable-next-line no-unused-vars
    const locomotiveScroll = new LocomotiveScroll();
  }, []);

  return (
    <div className=' font-heading-Poppins  bg-linear-to-b overflow-hidden  from-black via-cyan-950 to-cyan-700   text-white'>
      <Navbar />
      <MainRoutes />
    </div>
  );
}

export default App;
