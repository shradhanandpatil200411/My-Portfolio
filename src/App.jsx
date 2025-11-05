import gsap from "gsap";
import Navbar from "./Components/Navbar";
import MainRoutes from "./Routes/mainRoutes";
import { ScrollTrigger, SplitText } from "gsap/all";

function App() {
  gsap.registerPlugin(SplitText);
  gsap.registerPlugin(ScrollTrigger);

  return (
    <div className=' overflow-x-hidden font-heading-Poppins  bg-linear-to-b overflow-hidden  from-black via-cyan-950 to-cyan-700   text-white'>
      <Navbar />
      <MainRoutes />
    </div>
  );
}

export default App;
