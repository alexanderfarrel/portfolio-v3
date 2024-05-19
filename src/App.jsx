import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Intro from "./pages/intro";

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Intro />} />
          <Route path="/coba" element={<Intro />}></Route>
        </Routes>
      </Router>
    </>
  );
};

export default App;
