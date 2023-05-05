import Footer from "./components/Footer";
import PortfolioNavbar from "./components/Navbar";
import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Portfolio from "./pages/Portfolio";

function App() {
  return (
    <div>
      <PortfolioNavbar />
      <Router>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/projects" element={<Portfolio />}></Route>
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
