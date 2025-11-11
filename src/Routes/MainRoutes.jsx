import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router";
const Loader = lazy(() => import("../Components/Loader"));
const MySkill = lazy(() => import("../Page/MySkill"));
const Home = lazy(() => import("../Page/Home"));
const About = lazy(() => import("../Page/About"));

function MainRoutes() {
  return (
    <>
      <Routes>
        <Route
          path='/'
          element={
            <Suspense fallback={<Loader />}>
              <Home />
            </Suspense>
          }
        />
        <Route
          path='/about'
          element={
            <Suspense fallback={<Loader />}>
              <About />
            </Suspense>
          }
        />
        <Route
          path='/my-skills'
          element={
            <Suspense fallback={<Loader />}>
              <MySkill />
            </Suspense>
          }
        />
      </Routes>
    </>
  );
}

export default MainRoutes;
