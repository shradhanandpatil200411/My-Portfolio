import gsap from "gsap";
import Navbar from "./Components/Navbar";

import {
  DrawSVGPlugin,
  InertiaPlugin,
  ScrollTrigger,
  SplitText,
} from "gsap/all";
import { useGSAP } from "@gsap/react";
import LocomotiveScroll from "locomotive-scroll";
import { useEffect } from "react";
import MainRoutes from "./Routes/MainRoutes";

function App() {
  gsap.registerPlugin(
    useGSAP,
    ScrollTrigger,
    SplitText,
    InertiaPlugin,
    DrawSVGPlugin
  );

  useEffect(() => {
    // eslint-disable-next-line no-unused-vars
    const locomotiveScroll = new LocomotiveScroll();
  }, []);

  return (
    <>
      <div className=' font-heading-Poppins  bg-linear-to-t overflow-hidden  from-black via-cyan-950 to-cyan-900   text-white'>
        <Navbar />
        <MainRoutes />
      </div>
    </>
  );
}

export default App;
