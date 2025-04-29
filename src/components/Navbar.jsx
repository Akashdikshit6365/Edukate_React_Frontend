import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';
import '../Styles/Navbar.css'; // Import custom CSS file for animations

function Navbar() {
  const location = useLocation();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false); // for mobile menu

  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);
  const closeDropdown = () => setDropdownOpen(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => {
    setMenuOpen(false);
    setDropdownOpen(false);
  };

  return (
    <nav className="navbar navbar-expand-lg bg-white navbar-light shadow-sm sticky-top p-0">
      <Link to="/" className="navbar-brand px-4 px-lg-5">
        <h2 className="m-0 text-primary fw-bold">
          <i className="fa fa-book-reader mr-3"></i>Edukate
        </h2>
      </Link>

      <button
        className="navbar-toggler me-4"
        type="button"
        onClick={toggleMenu}
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className={`collapse navbar-collapse justify-content-center ${menuOpen ? 'show' : ''}`} id="navbarCollapse">
        <div className="navbar-nav text-center">
          <Link
            to="/"
            className={`nav-item nav-link mx-3 fw-semibold ${location.pathname === '/' ? 'active' : ''}`}
            onClick={closeMenu}
          >
            Home
          </Link>
          <Link
            to="/about"
            className={`nav-item nav-link mx-3 fw-semibold ${location.pathname === '/about' ? 'active' : ''}`}
            onClick={closeMenu}
          >
            About
          </Link>
          <Link
            to="/courses"
            className={`nav-item nav-link mx-3 fw-semibold ${location.pathname === '/courses' ? 'active' : ''}`}
            onClick={closeMenu}
          >
            Courses
          </Link>

          <div
            className={`nav-item dropdown mx-3 fw-semibold ${dropdownOpen ? 'show' : ''}`}
            onMouseLeave={closeDropdown}
          >
            <span
              className="nav-link dropdown-toggle"
              role="button"
              onClick={toggleDropdown}
            >
              Pages
            </span>
            <div className={`dropdown-menu fade-up m-0 ${dropdownOpen ? 'show' : ''}`}>
              <Link to="/testimonial" className="dropdown-item" onClick={closeMenu}>Testimonial</Link>
              <Link to="/team" className="dropdown-item" onClick={closeMenu}>Instructors</Link>
              <Link to="/courses-details" className="dropdown-item" onClick={closeMenu}>Courses Details</Link>
              <Link to="/features" className="dropdown-item" onClick={closeMenu}>Features</Link>
            </div>
          </div>

          <Link
            to="/contact"
            className={`nav-item nav-link mx-3 fw-semibold ${location.pathname === '/contact' ? 'active' : ''}`}
            onClick={closeMenu}
          >
            Contact
          </Link>
        </div>

        <div className="d-none d-lg-block ms-auto pe-5">
          <Link to="/join" className="btn btn-primary py-2 px-4 rounded-pill join-btn">Join Us</Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
