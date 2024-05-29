import { Routes, Route, useLocation } from "react-router-dom";
import Intro from "../pages/intro";
import Projects from "../pages/projects";
import { AnimatePresence } from "framer-motion";
import Coba from "../pages/Coba";
import { motion } from "framer-motion";
export default function AnimateRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes key={location.pathname} location={location}>
        <Route path="/" element={<Intro />} />
        <Route path="/achievements" element={<Intro />}></Route>
        <Route path="/projects" element={<Projects />}></Route>
        <Route path="/contact" element={<Intro />}></Route>
        <Route path="/coba" element={<Coba />}></Route>
      </Routes>
    </AnimatePresence>
  );
}
