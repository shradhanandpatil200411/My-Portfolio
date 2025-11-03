import gsap from "gsap";
import Navbar from "./Components/Navbar";
import MainRoutes from "./Routes/mainRoutes";
import { ScrollTrigger, SplitText } from "gsap/all";

function App() {
  gsap.registerPlugin(SplitText);
  gsap.registerPlugin(ScrollTrigger);

  return (
    <div className=' overflow-x-hidden'>
      <Navbar />
      <MainRoutes />
    </div>
  );
}

export default App;
