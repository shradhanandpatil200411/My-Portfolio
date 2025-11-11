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
import { lazy, useEffect, useRef, useState } from "react";
import MainRoutes from "./Routes/MainRoutes";
const Loader = lazy(() => import("./Components/Loader"));

function App() {
  const [isPageLoad, setIsPageLoad] = useState(false);
  const appRef = useRef();
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

    setTimeout(() => {
      setIsPageLoad(true);
      console.log(isPageLoad);
    }, 11000);
  }, [isPageLoad]);

  return (
    <>
      {isPageLoad ? (
        <div
          ref={appRef}
          className=' font-heading-Poppins  bg-linear-to-t overflow-hidden  from-black via-cyan-950 to-cyan-900   text-white'>
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
