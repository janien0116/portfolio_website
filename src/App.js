import Footer from "./components/Footer";
import PortfolioNavbar from "./components/Navbar";
import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Portfolio from "./pages/Portfolio";
import Resume from "./pages/Resume";

function App() {
  return (
    <div>
      <Router>
      <PortfolioNavbar/>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/portfolio" element={<Portfolio />}></Route>
          <Route path="/resume" element={<Resume />}></Route>
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
