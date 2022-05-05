
import { Routes, Route } from 'react-router-dom';


import AboutPage from './pages/About';
import SkillsPage from "./pages/Skills";
import PortfolioPage from './pages/Portfolio';
import MusicPage from './pages/Music';
import ContactPage from './pages/Contact';
import Home from "./pages/Home";
import Navbar from './components/layout/Navbar';

function App() {
  return (
    <div>
      <Navbar className='header' />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/About' element={<AboutPage />} />
        <Route path='/Skills' element={<SkillsPage />} />
        <Route path='/Portfolio' element={<PortfolioPage />} />
        <Route path='/Music' element={<MusicPage />} />
        <Route path='/Contact' element={<ContactPage />} />
      </Routes>
    </div>
  );
}

export default App;
