import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
} from "react-router-dom";
import About from "./pages/About";
import Home from "./pages/Home";

const App = () => {
  return (
    <div>
      <Router>
        <NavLink to="/">Home</NavLink>
        <NavLink to="about">About</NavLink>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
