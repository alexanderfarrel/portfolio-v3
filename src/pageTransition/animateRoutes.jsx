import { Routes, Route, useLocation } from "react-router-dom";
import Intro from "../pages/intro";
import { AnimatePresence } from "framer-motion";
import Coba from "../pages/Coba";
import Transition from "./transitionView";
import Projects from "../pages/projects";
import Achievements from "../pages/achievements";
export default function AnimateRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence key={location.pathname} mode="wait">
      <Transition>
        <Routes key={location.pathname} location={location}>
          <Route path="/" element={<Intro />} />
          <Route path="/achievements" element={<Achievements />}></Route>
          <Route path="/projects" element={<Projects />}></Route>
          <Route path="/contact" element={<Intro />}></Route>
          <Route path="/coba" element={<Coba />}></Route>
        </Routes>
      </Transition>
    </AnimatePresence>
  );
}
