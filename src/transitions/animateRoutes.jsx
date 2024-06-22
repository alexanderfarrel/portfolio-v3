import { Routes, Route, useLocation } from "react-router-dom";
import Intro from "../pages/intro";
import { AnimatePresence } from "framer-motion";
import Transition from "./transitionView";
import Projects from "../pages/projects";
import Achievements from "../pages/achievements";
import Home from "../pages/home";
import ContactPage from "../pages/contact";
export default function AnimateRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence key={location.pathname} mode="wait">
      <Routes key={location.pathname} location={location}>
        <Route
          path="/"
          element={
            <Transition>
              <Intro />
            </Transition>
          }
        />
        <Route
          path="/home"
          element={
            <Transition>
              <Home />
            </Transition>
          }
        />
        <Route
          path="/achievements"
          element={
            <Transition>
              <Achievements />
            </Transition>
          }
        />
        <Route
          path="/projects"
          element={
            <Transition>
              <Projects />
            </Transition>
          }
        />
        <Route
          path="/contact"
          element={
            <Transition>
              <ContactPage />
            </Transition>
          }
        />
      </Routes>
    </AnimatePresence>
  );
}
