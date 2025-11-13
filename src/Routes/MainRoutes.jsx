import { lazy } from "react";
import { Route, Routes } from "react-router";
const Home = lazy(() => import("../Page/Home"));
const About = lazy(() => import("../Page/About"));

function MainRoutes() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
      </Routes>
    </>
  );
}

export default MainRoutes;
