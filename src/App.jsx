import gsap from "gsap";
import Navbar from "./Components/Navbar";

import {
  DrawSVGPlugin,
  InertiaPlugin,
  MotionPathPlugin,
  ScrollTrigger,
  SplitText,
} from "gsap/all";
import { useGSAP } from "@gsap/react";
import LocomotiveScroll from "locomotive-scroll";
import { lazy, useEffect, useRef, useState } from "react";
import MainRoutes from "./Routes/MainRoutes";
import Skills from "./Page/Skills";
import About from "./Page/About";
const Loader = lazy(() => import("./Components/Loader"));

function App() {
  const [isPageLoad, setIsPageLoad] = useState(false);
  const appRef = useRef();
  gsap.registerPlugin(
    useGSAP,
    ScrollTrigger,
    SplitText,
    InertiaPlugin,
    DrawSVGPlugin,
    MotionPathPlugin
  );

  useGSAP(() => {
    gsap.from(appRef.current, {
      x: 1000,
      opacity: 0,
      duration: 2,
    });
  });

  useEffect(() => {
    // eslint-disable-next-line no-unused-vars
    const locomotiveScroll = new LocomotiveScroll();

    setTimeout(() => {
      setIsPageLoad(true);
      console.log(isPageLoad);
    }, 12000);
  }, [isPageLoad]);

  return (
    <>
      {isPageLoad ? (
        <div
          ref={appRef}
          className=' font-heading-Poppins  bg-linear-to-b overflow-hidden  from-black via-cyan-950 to-cyan-900   text-white'>
          <Navbar />
          <MainRoutes />
        </div>
      ) : (
        <Loader />
      )}
    </>
  );
}

export default App;
