import { lazy } from "react";
import { Route, Routes } from "react-router";

const MySkill = lazy(() => import("../Page/MySkill"));
const Home = lazy(() => import("../Page/Home"));
const About = lazy(() => import("../Page/About"));

function MainRoutes() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/my-skills' element={<MySkill />} />
      </Routes>
    </>
  );
}

export default MainRoutes;
