import { Routes, Route } from "react-router-dom";
import AboutPage from "./pages/About";
import SkillsPage from "./pages/Skills";
import PortfolioPage from "./pages/Portfolio";
import MusicPage from "./pages/Music";
import ContactPage from "./pages/Contact";
import Home from "./pages/Home";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Portfolio from "./pages/Portfolio";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";

function App() {
  return (
    <div className="container d-flex flex-column">
      <div className="row">
        <Navbar />
        <Home />
        <Skills />
        <Portfolio />
        <About />
      </div>
      {/* <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<AboutPage />} />
        <Route path="/Skills" element={<SkillsPage />} />
        <Route path="/Portfolio" element={<PortfolioPage />} />
        <Route path="/Music" element={<MusicPage />} />
        <Route path="/Contact" element={<ContactPage />} />
      </Routes> */}

      <Footer />
    </div>
  );
}

export default App;
