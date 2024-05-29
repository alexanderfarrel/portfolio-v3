import { BrowserRouter as Router } from "react-router-dom";
import AnimateRoutes from "./pageTransition/animateRoutes";

const App = () => {
  return (
    <>
      <Router>
        <AnimateRoutes></AnimateRoutes>
      </Router>
    </>
  );
};

export default App;
