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
import { useEffect, useRef, useState } from "react";
import MainRoutes from "./Routes/MainRoutes";
import Loader from "./Components/Loader";

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

    const onPageLoad = () => {
      setIsPageLoad(true);
    };

    // Check if the page has already loaded
    if (document.readyState === "complete") {
      onPageLoad();
    } else {
      window.addEventListener("load", onPageLoad);
      // Clean up the event listener when the component unmounts
      return () => window.removeEventListener("load", onPageLoad);
    }
  }, []);

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
