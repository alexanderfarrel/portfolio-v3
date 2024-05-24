import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Intro from "./pages/intro";

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Intro />} />
          <Route path="/achievements" element={<Intro />}></Route>
          <Route path="/projects" element={<Intro />}></Route>
          <Route path="/contact" element={<Intro />}></Route>
        </Routes>
      </Router>
    </>
  );
};

export default App;
