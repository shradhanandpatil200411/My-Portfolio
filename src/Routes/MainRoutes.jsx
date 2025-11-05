import React from "react";
import { Route, Routes } from "react-router";
import Home from "../Page/Home";
import About from "../Page/About";

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
