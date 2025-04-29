import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

// Pages
import Home from './pages/Home';
import About from './pages/About';
import Courses from './pages/Courses';
import Contact from './pages/Contact';
import Testimonial from './pages/Testimonial';
import Team from './pages/Team';
import Feature from './pages/Features';
import CourseDetails from './pages/Details';

// Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import Topbar from './components/TopBar';

function App() {

  // Initialize AOS (Animate On Scroll) library
  useEffect(() => {
    AOS.init({
      duration: 800,
      offset: 120,
      easing: 'ease-in-out',
      once: true,
    });
  }, []);

  return (
    <Router>
      {/* Global Components */}
      <ScrollToTop />
      <ToastContainer position="top-right" autoClose={3000} />

      {/* Layout */}
      <Topbar />
      <Navbar /> {/* Navbar rendered globally */}

      {/* Pages */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/courses-details" element={<CourseDetails />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/testimonial" element={<Testimonial />} />
        <Route path="/team" element={<Team />} />
        <Route path="/features" element={<Feature />} />
      </Routes>

      {/* Footer rendered globally */}
      <Footer />
    </Router>
  );
}

export default App;
