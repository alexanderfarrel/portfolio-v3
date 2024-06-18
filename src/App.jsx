import { BrowserRouter as Router } from "react-router-dom";
import AnimateRoutes from "./transitions/animateRoutes";

const App = () => {
  return (
    <Router>
      <AnimateRoutes />
    </Router>
  );
};

export default App;
