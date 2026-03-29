import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar  from './components/layout/Navbar';
import Footer  from './components/layout/Footer';
import Home    from './pages/Home';
import About   from './pages/About';
import Contact from './pages/Contact';
import './styles/globals.css';

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <main>
        <Routes>
          <Route path="/"        element={<Home />} />
          <Route path="/about"   element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}
