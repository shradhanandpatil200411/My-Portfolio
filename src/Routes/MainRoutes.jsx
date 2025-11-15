import { lazy } from "react";
import { Route, Routes } from "react-router";
const Home = lazy(() => import("../Page/Home"));
const About = lazy(() => import("../Page/About"));
const Contact = lazy(() => import("../Page/Contact"));
const Skills = lazy(() => import("../Page/Skills"));

function MainRoutes() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/skills' element={<Skills />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </>
  );
}

export default MainRoutes;
